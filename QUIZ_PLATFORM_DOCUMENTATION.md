# Quiz & Leaderboard Platform

A Next.js-based quiz platform with real-time leaderboard functionality using Google Sheets as the backend.

## Features

- Interactive MCQ quiz interface
- User identity collection (name + email)
- Real-time leaderboard with auto-refresh
- Duplicate submission prevention
- Quiz result storage in Google Sheets
- Responsive design with Tailwind CSS

## Architecture

### Frontend (Next.js App Router)
- `/quiz/[quizId]` - Dynamic quiz pages
- `/leaderboard` - Real-time updating leaderboard
- `/api/submit-quiz` - Quiz submission endpoint
- `/api/get-leaderboard` - Leaderboard data endpoint

### Backend (Google Apps Script)
- Serverless functions deployed as web apps
- Google Sheets as the database
- Handles quiz submissions and prevents duplicates
- Provides leaderboard data via REST API

## File Structure

```
/workspace/
├── src/
│   └── app/
│       ├── api/
│       │   ├── submit-quiz/
│       │   │   └── route.ts
│       │   └── get-leaderboard/
│       │       └── route.ts
│       ├── quiz/
│       │   └── [quizId]/
│       │       └── page.tsx
│       ├── leaderboard/
│       │   └── page.tsx
│       ├── page.tsx
│       └── layout.tsx
├── GOOGLE_APPS_SCRIPT_SETUP.md
└── QUIZ_PLATFORM_DOCUMENTATION.md
```

## Implementation Details

### Quiz Page (`/quiz/[quizId]/page.tsx`)
- Displays questions in a paginated format
- Collects user information (name, email)
- Tracks time taken to complete the quiz
- Calculates and submits score to backend
- Shows results and review after submission

### Submission API (`/api/submit-quiz/route.ts`)
- Validates required fields (name, email, quizId)
- Calculates score based on correct answers
- Records time taken to complete quiz
- Submits data to Google Sheets via Apps Script

### Leaderboard API (`/api/get-leaderboard/route.ts`)
- Fetches data from Google Sheets
- Filters by quiz ID if specified
- Sorts by score (descending) then time taken (ascending)
- Returns JSON response for frontend consumption

### Leaderboard Page (`/leaderboard/page.tsx`)
- Displays ranked list of quiz takers
- Auto-refreshes every 10 seconds
- Allows filtering by specific quiz
- Visual indicators for top performers

## Google Sheets Integration

The platform uses Google Apps Script to interact with Google Sheets as a database. See `GOOGLE_APPS_SCRIPT_SETUP.md` for detailed instructions on setting up the backend.

### Data Schema in Google Sheets:
- **Timestamp**: When the quiz was submitted
- **Name**: Participant's name
- **Email**: Participant's email
- **Quiz ID**: Identifier for the quiz taken
- **Score**: Number of correct answers
- **Time Taken**: Time taken to complete the quiz (in seconds)

## Security & Validation

- Email and quiz ID combinations are checked to prevent duplicate submissions
- Input validation on both frontend and backend
- Client-side checks for required fields
- Server-side validation in API routes

## Performance & Scalability

- Client-side caching where appropriate
- Auto-refresh intervals optimized for performance
- Efficient sorting algorithms for leaderboard display
- Suitable for school/club level traffic

## How to Set Up

1. Follow the instructions in `GOOGLE_APPS_SCRIPT_SETUP.md` to set up the Google Sheets backend
2. Update the API endpoints in the Next.js app to point to your deployed Apps Script
3. Install dependencies: `npm install next react react-dom`
4. Run the development server: `npm run dev`

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

The application will be available at http://localhost:3000

## Deployment

For production deployment:
1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Deploy to your hosting platform (Vercel, Netlify, etc.)

Note: When deploying, ensure your Google Apps Script web app URL is accessible and properly configured.

## Customization

- Modify quiz data structure in the quiz page component
- Adjust styling using Tailwind CSS classes
- Customize leaderboard sorting algorithm
- Add additional validation rules as needed