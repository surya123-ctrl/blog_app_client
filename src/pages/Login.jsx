import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="Username" />
        <input required type="password" placeholder="Password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Don't have an account? <Link to="/register">Sign-up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
