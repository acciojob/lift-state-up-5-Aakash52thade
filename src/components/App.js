import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setLoggedIn(true);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      {!isLoggedIn ? (
        <LoginForm handleLogin={handleLogin} />
      ) : (
        <p>You are logged in!</p>
      )}
    </div>
  );
}

export default App;