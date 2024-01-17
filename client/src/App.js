import axios from "axios";
import React, { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3001/submit-feedback", {
      feedback,
    });
    if (response.status === 200) {
      setFeedback("");
      alert(response.data);
    }
  };

  return (
    <div className="App">
      <h1 className="feedback_title">Feedback Form</h1>
      <label>
        Feedback:
        <textarea value={feedback} onChange={handleFeedbackChange} />
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>
        Submit Feedback
      </button>
    </div>
  );
}

export default App;
