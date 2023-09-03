import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    // You can handle the submission of feedback here (e.g., send it to a server).
    console.log('Feedback submitted:', feedback);
    // You can also reset the form if needed.
    setFeedback('');
  };

 

  return (
    <div className="feedback-form">
      <div className="form-container">
        <textarea
          rows="1"
          cols="100"
          placeholder="Signup For Updates!"
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FeedbackForm;
