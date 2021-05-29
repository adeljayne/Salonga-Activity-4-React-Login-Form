import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    name: "Adel Jayne Salonga",
    email: "adeljaynesalonga@gmail.com",
    password: "adeljaynesalonga"

  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.name == adminUser.name && details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else{
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    <div className="App">
       {(user.email != "") ? (
        <form className="welcome-outer">
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      </form>
      ) : ( 
        <LoginForm Login={Login} error={error}/>
      )} 
    </div>
  );
}

export default App;
