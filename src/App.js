import React, { useState } from 'react';

function App() {
  const [userID, setUserID] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Yeni API URL'nizi burada kullanın
      const response = await fetch('https://pwpb7feut3.execute-api.us-east-1.amazonaws.com/dev/jobdescription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // sadece userID ve description gönderiyoruz
        body: JSON.stringify({ userID, description })
      });
      const data = await response.json();
      console.log(data);
      alert('Job description saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save job description.');
    }
  };

  return (
    <div>
      <h1>Job Description Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="text" value={userID} onChange={e => setUserID(e.target.value)} />
        </label><br />
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
