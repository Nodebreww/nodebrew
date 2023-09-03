import React, { useState } from 'react';


const FAQSection = () => {
  const faqData = [
    { question: "Lorem ipsum dolor sit amet, consectetur  ", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "Lorem ipsum dolor sit amet, consectetur  ", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "Lorem ipsum dolor sit amet, consectetur  ", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "Lorem ipsum dolor sit amet, consectetur  ", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "Lorem ipsum dolor sit amet, consectetur  ", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "QLorem ipsum dolor sit amet, consectetur  ", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "Lorem ipsum dolor sit amet, consectetur  ", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { question: "Lorem ipsum dolor sit amet, consectetur ", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  ];

  const [visibleAnswers, setVisibleAnswers] = useState([]);

  const toggleAnswer = (index) => {
    if (visibleAnswers.includes(index)) {
      setVisibleAnswers(visibleAnswers.filter((item) => item !== index));
    } else {
      setVisibleAnswers([...visibleAnswers, index]);
    }
  };

  return (
    <div className="faq-section">
      <div className="left-questions">
        {faqData.slice(0, 4).map((item, index) => (
          <div className="faq-item" key={index}>
            <h3 className="question" onClick={() => toggleAnswer(index)}>
              {item.question}
            </h3>
            {visibleAnswers.includes(index) && (
              <p className="answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="right-questions">
        {faqData.slice(4, 8).map((item, index) => (
          <div className="faq-item" key={index}>
            <h3 className="question" onClick={() => toggleAnswer(index + 4)}>
              {item.question}
            </h3>
            {visibleAnswers.includes(index + 4) && (
              <p className="answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
