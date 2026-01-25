import { NextRequest, NextResponse } from 'next/server';

// Mock leaderboard data - in real implementation this would come from Google Sheets
const mockLeaderboardData = [
  { name: 'John Doe', score: 10, timeTaken: 120, timestamp: '2023-05-15T10:30:00Z', quizId: 'math-quiz' },
  { name: 'Jane Smith', score: 10, timeTaken: 135, timestamp: '2023-05-15T11:45:00Z', quizId: 'math-quiz' },
  { name: 'Bob Johnson', score: 9, timeTaken: 110, timestamp: '2023-05-15T09:20:00Z', quizId: 'math-quiz' },
  { name: 'Alice Williams', score: 8, timeTaken: 95, timestamp: '2023-05-15T14:10:00Z', quizId: 'math-quiz' },
  { name: 'Charlie Brown', score: 7, timeTaken: 145, timestamp: '2023-05-15T16:05:00Z', quizId: 'math-quiz' },
];

export async function GET(request: NextRequest) {
  try {
    // Extract search params
    const { searchParams } = new URL(request.url);
    const quizId = searchParams.get('quizId') || undefined;
    
    // Filter by quizId if provided
    let filteredData = mockLeaderboardData;
    if (quizId) {
      filteredData = mockLeaderboardData.filter(entry => entry.quizId === quizId);
    }
    
    // Sort by score (descending), then by time taken (ascending)
    const sortedData = [...filteredData].sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score; // Higher scores first
      }
      return a.timeTaken - b.timeTaken; // Faster times first for same score
    });
    
    return NextResponse.json(sortedData);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json(
      { message: 'Internal server error' }, 
      { status: 500 }
    );
  }
}