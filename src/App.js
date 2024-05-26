import React, { useState } from 'react';

const App = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [jobID, setJobID] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data to be sent in the request body
    const data = {
      jobTitle: jobTitle,
      jobDescription: jobDescription
    };

    try {
      // Sending POST request to the API
      const response = await fetch('https://wrptlv2os4.execute-api.us-east-1.amazonaws.com/dev/job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Parsing JSON response
      const responseData = await response.json();
      console.log('API Response:', responseData); // Debugging line

      // Update state with response data
      if (responseData.body) {
        const parsedBody = JSON.parse(responseData.body);
        setResponseMessage(parsedBody.message);
        setJobID(parsedBody.jobID);
      } else {
        setResponseMessage('Job saved successfully, but no Job ID returned.');
        setJobID('');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error occurred while submitting the job.');
      setJobID('');
    }
  };

  return (
    <div>
      <h1>Job Description Submission Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jobTitle">Job Title: </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="jobDescription">Job Description: </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>Response: {responseMessage}</p>}
      {jobID && <p>Job ID: {jobID}</p>}
    </div>
  );
};

export default App;
