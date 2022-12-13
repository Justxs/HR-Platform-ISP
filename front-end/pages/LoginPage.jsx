import { useState } from "react";
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      navigate("/dashboard");
    }

    return (
      <>
        <div>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <br/>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <br/>
            <input type="submit" value="login"/>
          </form>
        </div>

      </>
  );
}

export default LoginPage;