import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from "../src/Hooks/useAuth";
import axios from "../src/Api/axios";
function LoginPage() {
  const {setAuth} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response= await axios.post('/api/login',
      JSON.stringify({
        email,
        password
        }),
        {          
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
        });
      const token = response?.data?.token;
      const roles = response?.data?.role;
      setAuth({email, password, token, roles});
      setEmail('');
      setPwd('');
      navigate('/dashboard');
    } catch (err) {
      if(!err?.response){
        setErrMsg('No server response');
      }else if(err.response?.status===409){
        setErrMsg(err.response.data.message);
      }else{
        setErrMsg('Something wrong');
      }
    }

  }

  return (
    <div className="shadow container w-50 p-4 bg-white rounded">
      <h1 className="text-center">Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Login">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
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
        <div className="d-grid gap-2">
          <Button size="lg" className="mb-3" type="submit">Login</Button>
        </div>
      </Form>
      <p className="text-danger">{errMsg}</p>
    </div>
  );
}

export default LoginPage;