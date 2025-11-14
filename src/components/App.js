
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm"

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

   function submitHandler(e) {
      e.preventDefault();
      setLoggedIn(true);
  }
  return (
    <div>
        
        {
          !isLoggedIn  ?
          <LoginForm submitHandler={submitHandler} /> 
          : 
                      <p>You are logged in!</p>

        }

    </div>
  )
}

export default App;
