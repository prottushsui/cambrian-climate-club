'use client';

import React, { useState, useEffect } from 'react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizData {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

interface UserData {
  name: string;
  email: string;
}

const QuizPage: React.FC = () => {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [userData, setUserData] = useState<UserData>({ name: '', email: '' });
  const [showResults, setShowResults] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Get quizId from URL (in a real Next.js app this would be dynamic)
  const quizId = typeof window !== 'undefined' ? window.location.pathname.split('/')[2] : 'default';
  
  // Mock quiz data - in real app, this would come from an API
  useEffect(() => {
    // Simulate fetching quiz data
    const fetchQuizData = async () => {
      setLoading(true);
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockQuizData: QuizData = {
        id: quizId,
        title: `Quiz ${quizId}`,
        description: `This is a sample quiz with ${quizId} questions`,
        questions: [
          {
            id: 'q1',
            question: 'What is the capital of France?',
            options: ['London', 'Berlin', 'Paris', 'Madrid'],
            correctAnswer: 'Paris'
          },
          {
            id: 'q2',
            question: 'Which planet is known as the Red Planet?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 'Mars'
          },
          {
            id: 'q3',
            question: 'What is the largest mammal?',
            options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
            correctAnswer: 'Blue Whale'
          }
        ]
      };
      
      setQuizData(mockQuizData);
      setStartTime(Date.now());
      setLoading(false);
    };
    
    fetchQuizData();
  }, [quizId]);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userData.name || !userData.email) {
      alert('Please enter your name and email');
      return;
    }

    if (!quizData) return;

    const endTime = Date.now();
    const timeTaken = Math.round((endTime - (startTime || endTime)) / 1000); // in seconds

    // Calculate score
    let score = 0;
    quizData.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });

    // Prepare submission data
    const submissionData = {
      quizId: quizData.id,
      name: userData.name,
      email: userData.email,
      score,
      timeTaken,
      answers: selectedAnswers,
      timestamp: new Date().toISOString()
    };

    try {
      // Submit to backend API (Google Sheets via Apps Script)
      const response = await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setQuizSubmitted(true);
        setShowResults(true);
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Error submitting quiz. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please try again.');
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < (quizData?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4">Loading quiz...</p>
      </div>
    );
  }

  if (!quizData) {
    return <div>Quiz not found</div>;
  }

  if (quizSubmitted) {
    const totalQuestions = quizData.questions.length;
    const correctAnswers = Object.entries(selectedAnswers).filter(
      ([questionId, answer]) => {
        const question = quizData.questions.find(q => q.id === questionId);
        return question && question.correctAnswer === answer;
      }
    ).length;

    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">{quizData.title}</h2>
          <div className="mb-6">
            <p className="text-xl mb-2">Your Score: <span className="font-bold">{correctAnswers}/{totalQuestions}</span></p>
            <p className="text-lg">Time Taken: <span className="font-bold">{Math.floor((Date.now() - (startTime || Date.now())) / 1000)} seconds</span></p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Review Answers:</h3>
            {quizData.questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className={`p-4 mb-4 rounded-lg border ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                  <p className="font-medium">{index + 1}. {question.question}</p>
                  <p className="ml-4 mt-2">
                    Your answer: <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>{userAnswer || 'No answer'}</span>
                  </p>
                  {!isCorrect && (
                    <p className="ml-4 text-green-600 font-medium">
                      Correct answer: {question.correctAnswer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{quizData.title}</h1>
      <p className="text-gray-600 mb-6">{quizData.description}</p>
      
      {/* User Info Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Enter Your Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleUserInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleUserInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </form>

      {/* Quiz Progress */}
      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded ${currentQuestionIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          Previous
        </button>
        
        <div className="text-center">
          <span className="text-lg font-medium">
            Question {currentQuestionIndex + 1} of {quizData.questions.length}
          </span>
        </div>
        
        <button
          onClick={nextQuestion}
          disabled={currentQuestionIndex === quizData.questions.length - 1}
          className={`px-4 py-2 rounded ${currentQuestionIndex === quizData.questions.length - 1 ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          {currentQuestionIndex === quizData.questions.length - 1 ? 'Submit Quiz' : 'Next'}
        </button>
      </div>

      {/* Current Question */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </h2>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-start">
              <input
                type="radio"
                id={`${currentQuestion.id}-${index}`}
                name={currentQuestion.id}
                checked={selectedAnswers[currentQuestion.id] === option}
                onChange={() => handleAnswerSelect(currentQuestion.id, option)}
                className="mt-1 mr-2"
              />
              <label htmlFor={`${currentQuestion.id}-${index}`} className="text-gray-700">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation for mobile when at last question */}
      {currentQuestionIndex === quizData.questions.length - 1 && (
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
          >
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;