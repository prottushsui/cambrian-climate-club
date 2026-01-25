import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Quiz Platform</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Test your knowledge with our interactive quizzes and compete on the leaderboard!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-blue-200">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Take a Quiz</h2>
          <p className="text-gray-600 mb-4">
            Challenge yourself with our collection of quizzes on various topics. 
            Each quiz is designed to test your knowledge and skills.
          </p>
          <div className="space-y-3">
            <Link 
              href="/quiz/general-knowledge" 
              className="block w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              General Knowledge Quiz
            </Link>
            <Link 
              href="/quiz/mathematics" 
              className="block w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Mathematics Quiz
            </Link>
            <Link 
              href="/quiz/science" 
              className="block w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Science Quiz
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-green-200">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">View Leaderboard</h2>
          <p className="text-gray-600 mb-4">
            See how you rank against other participants. Our leaderboard updates in real-time 
            so you can track your progress and compete with others.
          </p>
          <Link 
            href="/leaderboard" 
            className="inline-block w-full py-3 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-center"
          >
            View Leaderboard
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
            <h3 className="text-lg font-medium mb-2">Choose a Quiz</h3>
            <p className="text-gray-600">Select from our collection of quizzes on different topics</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
            <h3 className="text-lg font-medium mb-2">Take the Quiz</h3>
            <p className="text-gray-600">Answer the questions and submit your responses</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
            <h3 className="text-lg font-medium mb-2">Check Results</h3>
            <p className="text-gray-600">See your score and compare with others on the leaderboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}