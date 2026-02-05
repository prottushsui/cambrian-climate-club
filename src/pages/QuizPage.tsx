import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';

/**
 * QuizPage component - Main quiz interface
 * 
 * @component
 */
const QuizPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="Quiz" 
        subtitle="Test your knowledge and learn more about climate topics" 
      />
      <div className="mt-8">
        {!selectedQuiz ? (
          // Quiz Selection View
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-charcoal-900 mb-6">Available Quizzes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quizzes.map((quiz, index) => (
                <motion.div
                  key={quiz.id}
                  className="bg-white rounded-xl shadow-elevated p-6 border border-sandstone-200 cursor-pointer hover:shadow-premium transition-shadow"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleQuizStart(quiz)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">{quiz.title}</h3>
                  <p className="text-charcoal-600 mb-4">{quiz.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-charcoal-500">{quiz.questions.length} questions</span>
                    <button className="px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors">
                      Start Quiz
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : showResults ? (
          // Results View
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl shadow-elevated p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h2 className="text-3xl font-semibold text-primary-700 mb-4">Quiz Completed!</h2>
              <p className="text-5xl font-semibold text-charcoal-900 mb-2">{score}/{selectedQuiz.questions.length}</p>
              <p className="text-xl text-charcoal-600 mb-8">Correct Answers</p>
              
              <div className="mb-8">
                <div className="w-full bg-sandstone-200 rounded-full h-4 mb-2">
                  <div 
                    className="bg-primary-700 h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(score / selectedQuiz.questions.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-charcoal-600">{Math.round((score / selectedQuiz.questions.length) * 100)}% Correct</p>
              </div>
              
              <div className="flex justify-center gap-4">
                <button 
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-sandstone-200 text-charcoal-800 rounded-lg hover:bg-sandstone-300 transition-colors"
                >
                  Try Another Quiz
                </button>
                <button 
                  onClick={() => {
                    setSelectedQuiz(null);
                    resetQuiz();
                  }}
                  className="px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors"
                >
                  Back to Quizzes
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
          // Quiz Taking View
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-charcoal-900">{selectedQuiz.title}</h2>
              <span className="text-lg text-charcoal-600">
                Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}
              </span>
            </div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-elevated p-6 mb-6"
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-xl font-semibold text-charcoal-900 mb-6">
                {selectedQuiz.questions[currentQuestionIndex].text}
              </h3>
              
              <div className="space-y-3">
                {selectedQuiz.questions[currentQuestionIndex].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedOption === index 
                        ? index === selectedQuiz.questions[currentQuestionIndex].correctAnswer
                          ? 'border-primary-600 bg-sandstone-100'
                          : 'border-red-500 bg-red-50'
                        : 'border-sandstone-200 hover:bg-sandstone-50'
                    }`}
                    onClick={() => handleOptionSelect(index)}
                    disabled={selectedOption !== null}
                    whileHover={{ scale: selectedOption === null ? 1.02 : 1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <span className="mr-3 font-medium">{String.fromCharCode(65 + index)}.</span>
                      <span>{option}</span>
                      {selectedOption === index && index === selectedQuiz.questions[currentQuestionIndex].correctAnswer && (
                        <span className="ml-auto text-primary-700 font-semibold">✓ Correct!</span>
                      )}
                      {selectedOption === index && index !== selectedQuiz.questions[currentQuestionIndex].correctAnswer && (
                        <span className="ml-auto text-red-500 font-semibold">✗ Incorrect</span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            
            <div className="flex justify-between">
              <button 
                onClick={resetQuiz}
                className="px-6 py-3 bg-sandstone-200 text-charcoal-800 rounded-lg hover:bg-sandstone-300 transition-colors"
              >
                Back to Quizzes
              </button>
              
              <button 
                onClick={handleNextQuestion}
                disabled={selectedOption === null}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  selectedOption !== null 
                    ? 'bg-primary-700 text-white hover:bg-primary-800' 
                    : 'bg-sandstone-200 text-charcoal-400 cursor-not-allowed'
                }`}
              >
                {currentQuestionIndex < selectedQuiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
