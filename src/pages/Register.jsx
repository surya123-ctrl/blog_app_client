import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="auth">
      <h1>Sign-up</h1>
      <form>
        <input required type="text" placeholder="Username" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <button>Sign-up</button>
        <p>This is an error!</p>
        <span>
          Do you have an account?{" "}
          <Link className="sign-up" to="/login">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
