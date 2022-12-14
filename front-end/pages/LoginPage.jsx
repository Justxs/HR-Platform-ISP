import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage() {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="container w-25 bg-white rounded">
      <h1 className="text-center">Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Login">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Username"
            onChange={(event) => setUser(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Login">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={(event) => setPwd(event.target.value)}
          />
        </Form.Group>
        <Button className="mb-3" type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default LoginPage;