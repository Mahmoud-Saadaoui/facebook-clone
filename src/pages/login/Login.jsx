import "./login.css";
import { useState } from "react";
import { useHistory  } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      history.push("/home");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook Clone</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social App.
          </span>
        </div>

        <div className="loginRight">
          <form className="loginBox" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className={`loginInput ${errors.email ? "inputError" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="errorText">{errors.email}</span>}

            <input
              type="password"
              placeholder="Password"
              className={`loginInput ${errors.password ? "inputError" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="errorText">{errors.password}</span>
            )}

            <button type="submit" className="loginButton">
              Log In
            </button>

            <span className="loginForgot">Forgot Password?</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;