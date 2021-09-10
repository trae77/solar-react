
import Alert from "../components/Alert";
import React, { Component } from "react";
import Container from "../components/Container";

class login extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    results: null,
    error: "",
  };

  
  loginFormHandler = async (event) => {

  event.preventDefault();
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  var body = {
  
    "email": email,
    "password": password
  }
  
  if (body) {
  console.log(body);
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify( body ),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};


 signupFormHandler = async (event) => {

  event.preventDefault();
  
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
 var body = {
   "name": name, 
   "email": email,
   "password": password
 }

 if (name && email && password) {
   const response = await fetch('/api/users', {
     method: 'POST',
     body: JSON.stringify(body),
     headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      document.location.replace('/info');
    } else {
      alert(response.statusText);
    }
  }
};


// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);

render( ) {
   
  return (
    <div>
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Enter your information:</h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
  
      </Container>
    </div>
  );
}
}

export default login;

