import { useState } from "react";
import './signup.css';

import { assests } from "../../assets/assets";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
  let url="https://project-1-backend-3ey1.onrender.com";
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/signup`, {
        name: formData.username,
        email: formData.email,
        password: formData.password
      });
      
      if (response.status === 201) {
        toast.success('Registration successful! Please login.');
        // Switch to login form
        props.setSignUpState(false);
        props.setLoginState(true);
      }
    } catch (error) {
      toast.error(error.response?.data || 'Registration failed. Please try again.');
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="signup-container">
     
      <div className="signup-page">
        <img className="cross-icon" src={assests.cross_icon} onClick={()=>props.setSignUpState(false)}/>
        <h2 className="inner-content">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="inner-content">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
           
              value={formData.username}
              onChange={handleChange}
              className="inner-content"
              required
            />
          </div>
          <div>
            <label className="inner-content">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="inner-content"
             
              required
            />
          </div>
          <div>
            <label className="inner-content">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="inner-content"
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;