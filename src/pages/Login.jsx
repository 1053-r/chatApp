import React from 'react';

export const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">ClassChat</span>
            <span className="title">Log in</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>                
                <button>sign in</button>
                <p>don't have an account? sign up</p>
            </form>
        </div>
    </div>
)
}
