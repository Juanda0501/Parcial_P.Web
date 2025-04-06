import { useState } from 'react';
import userIcon from '../../assets/Usersgv.svg';
import '../../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username: username,
      password: password,
      rememberMe: rememberMe,
    });
  };

  return (
    <div className="login-container">
        <div className="circle circle-purple"></div>
      <div className="circle circle-blue"></div>
      <div className="user-icon">
        <img src={userIcon} alt="User Icon" width="50" height="50" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <div className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="custom-checkbox"
          />
          <label>Remember me</label>
        </div>
        <button type="submit" className="sign-in-btn">
          Sign in
        </button>
      </form>
      <a href="#" className="forgot-password">
        Forgot password?
      </a>
    </div>
  );
}

export default Login;