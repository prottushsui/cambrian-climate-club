# Google Apps Script Setup for Quiz Platform

This document explains how to set up Google Apps Script to handle quiz submissions and store data in Google Sheets.

## Prerequisites

1. A Google account
2. Access to Google Sheets and Google Apps Script

## Step-by-step Setup

### 1. Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Quiz Results"
3. Add the following column headers in row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Quiz ID`
   - E1: `Score`
   - F1: `Time Taken`

### 2. Create the Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Replace the default code with the following:

```javascript
const SHEET_NAME = "Sheet1"; // Change to your sheet name if different
const SCRIPT_PROP = PropertiesService.getScriptProperties();

function doPost(e) {
  try {
    // Parse the request data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email || !data.quizId) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: "Missing required fields: name, email, or quizId" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Open the active spreadsheet
    const sheet = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key")).getSheetByName(SHEET_NAME);
    
    // Check for duplicate submissions (same email + quizId combination)
    const values = sheet.getDataRange().getValues();
    for (let i = 1; i < values.length; i++) { // Start from 1 to skip header row
      if (values[i][2] === data.email && values[i][3] === data.quizId) { // Column C (email) and D (quizId)
        return ContentService.createTextOutput(
          JSON.stringify({ error: "Duplicate submission: You have already taken this quiz." })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Add the new data to the sheet
    sheet.appendRow([
      new Date(),           // Timestamp
      data.name,            // Name
      data.email,           // Email
      data.quizId,          // Quiz ID
      data.score || 0,      // Score
      data.timeTaken || 0,  // Time Taken
    ]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ 
        result: "success", 
        message: "Quiz submitted successfully" 
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error("Error in doPost:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ error: "An error occurred while processing the submission" })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    // Open the active spreadsheet
    const sheet = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key")).getSheetByName(SHEET_NAME);
    
    // Get all data from the sheet
    const range = sheet.getDataRange();
    const values = range.getValues();
    
    // Skip the header row and create objects
    const headers = values[0];
    const rows = [];
    for (let i = 1; i < values.length; i++) {
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = values[i][j];
      }
      rows.push(rowObject);
    }
    
    // Filter by quizId if provided
    if (e.parameter.quizId) {
      rows = rows.filter(row => row["Quiz ID"] === e.parameter.quizId);
    }
    
    // Sort by score (descending), then by time taken (ascending)
    rows.sort((a, b) => {
      const scoreA = parseInt(a["Score"]) || 0;
      const scoreB = parseInt(b["Score"]) || 0;
      
      if (scoreB !== scoreA) {
        return scoreB - scoreA; // Higher scores first
      }
      
      const timeA = parseInt(a["Time Taken"]) || 0;
      const timeB = parseInt(b["Time Taken"]) || 0;
      return timeA - timeB; // Faster times first for same score
    });
    
    // Return JSON response
    return ContentService.createTextOutput(JSON.stringify(rows))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error("Error in doGet:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ error: "An error occurred while fetching data" })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function setup() {
  const sheet = SpreadsheetApp.getActiveSheet();
  SCRIPT_PROP.setProperty("key", sheet.getParent().getId());
}
```

### 3. Deploy the Script

1. Click on the "Deploy" button in the top menu
2. Select "New Deployment"
3. Choose "Web app" as the type
4. Set these configurations:
   - Execute as: "Me"
   - Who has access: "Anyone" (or "Anyone with Google account" if preferred)
5. Click "Deploy"

### 4. Update Your Frontend Code

Replace the API endpoints in your Next.js app:

1. In `/src/app/api/submit-quiz/route.ts`, update the fetch URL to point to your deployed Apps Script web app URL
2. In `/src/app/api/get-leaderboard/route.ts`, update the fetch URL similarly

For example:
```javascript
// Instead of calling local API routes, call your deployed Apps Script:
const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(submissionData),
});
```

### 5. Run the Setup Function

1. In the Apps Script editor, select the `setup` function from the dropdown
2. Click the "Run" button
3. Authorize the script when prompted

## Data Schema

The Google Sheet will store the following columns:

| Column | Header       | Description                            |
|--------|--------------|----------------------------------------|
| A      | Timestamp    | When the quiz was submitted            |
| B      | Name         | Participant's name                     |
| C      | Email        | Participant's email                    |
| D      | Quiz ID      | Identifier for the quiz taken          |
| E      | Score        | Number of correct answers              |
| F      | Time Taken   | Time taken to complete the quiz (secs) |

## Security Considerations

- Restrict who can edit the Google Sheet to prevent tampering
- Consider implementing rate limiting to prevent spam submissions
- Be aware that "Anyone" access means anyone with the URL can potentially interact with your script
- Monitor the script executions in Google Apps Script dashboard

## Troubleshooting

- If submissions aren't appearing in the sheet, check the script execution logs in Apps Script
- Verify that the sheet name matches what's defined in the script
- Make sure the script property "key" is set by running the setup function