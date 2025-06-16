
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is this website about?",
      answer: "This website provides in-depth reviews, ratings, and analysis of movies from different genres, release periods, and countries. You'll find user-submitted reviews, critic opinions, and recommendations for all types of films."
    },
    {
      question: "How are movies rated?",
      answer: "Movies are rated based on a combination of user reviews, critic scores, and our proprietary algorithm that considers factors like cinematography, acting, plot, and overall entertainment value."
    },
    {
      question: "Can I submit my own reviews?",
      answer: "Yes! We encourage users to share their thoughts and reviews. Simply create an account and you can rate and review any movie in our database."
    },
    {
      question: "Is the content on this website free?",
      answer: "Yes, all content on FlickFinder is completely free to access. You can browse reviews, ratings, and recommendations without any subscription or payment required."
    },
    {
      question: "How do I search for a specific movie?",
      answer: "Use the search bar at the top of any page to find specific movies. You can search by title, director, actor, or genre. Our advanced search filters help you find exactly what you're looking for."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-white font-medium text-lg">
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-teal-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-teal-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-teal-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
