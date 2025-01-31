import { assests } from '../../assets/assets';
import './login.css'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
  const[email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  let url="https://project-1-backend-3ey1.onrender.com";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(`${url}/api/user/login`, { email, password });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log(response.data.token);
        toast.success('Login successful!');
        props.setLoginState(false); // Close login modal
      }
    } catch (error) {
      toast.error(error.response?.data || 'Login failed. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className='login-page'>
        <img className="cross-icon1" src={assests.cross_icon} onClick={()=>props.setLoginState(false)}/>
        <h1 className="form-left">Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-left">Email:</label>
            <input
              type="email"
              id="email"
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-left">Password:</label>
            <input
              type="password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className='create' onClick={()=>{
            props.setLoginState(false);
            props.setSignUpState(true);
          }}>Create an account ?</div>
        </form>
      </div>
    </div>
  );
};

export default Login;