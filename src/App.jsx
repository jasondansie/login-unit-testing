import './App.css';
import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [updated, setUpdated] = useState(userName);

  const handleChange = (e) => {
    setUserName(e.target.value);
  }

  const submitHandler = () => {
    console.log("button clicked");
    setUpdated(userName);
  }

  return (
    <div>
      <input type="text"
        id="username"
        name='username'
        onChange={handleChange}
        value={userName}
      />
      <h2>Username: {userName}</h2>
      <h2>Updated: {updated}</h2>
      <button onClick={submitHandler}>submit</button>
    </div>
  );
}

export default App;
