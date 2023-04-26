import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useNavigate, Link, NavLink } from "react-router-dom";
import Api from '../Api';
import "./Register.css";


const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  width:90%;
  margin: 10px 10px 0px 0px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 10px 0px;
`;

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [errorName, setErrorName] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
   
  function isValidEmail(message) {
    return /\S+@\S+\.\S+/.test(message);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
   
  useEffect(() => {
    if (isCPasswordDirty) {
        if (password === cPassword) {
            setShowErrorMessage(false);
        } else {
            setShowErrorMessage(true)
        }
    }
  }, [cPassword])

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email!=""&&password!=""&&cPassword!="") {
      var obj = {}
        obj["email"] = email
        obj["password"] = password
        obj["cPassword"] = cPassword
      
        Api.push(obj)
        console.log(Api)
    }

    if (name.length==0||lastname.length==0||email==0||password==0||cPassword==0) {
      setErrorName(true);
    }
    if(name&&lastname&&email&&password&&cPassword)
    {
      navigate("/login")
    } 
    
  }

  return (
    <div className="register">
      <NavLink to="">
        <img src="images/logo.png" className="register-logo" alt="logi" />
      </NavLink>
      <div className="register-container">
        <h3>Create Account</h3>
        <Form onSubmit={handleSubmit} >
         <h6>Your name</h6>
          <Input placeholder="First and last name" 
          onChange={(e) => {
            setName(e.target.value)
           }}
           value={name}
          />
          {errorName&&name.length<=0?<p>First and last name can't be Empty</p>:""}
          {/* <h6>Mobile number</h6> */}
          <Input 
          placeholder="Enter your Mobile number" 
           onChange={(e) => {
            setLastname(e.target.value)
           }}
           value={lastname}
          />
          {errorName&&lastname.length<=0?<p>mobile number can't be Empty</p>:""}
          {/* <h6>Email</h6> */}
          <Input 
          placeholder='Enter your Email'
            value={email}
            onChange={handleChange}
          />
          {errorName&&email.length<=0?<p>email can't be Empty</p>:""}
          {error && <p style={{color: 'red'}}>{error}</p>}
          {/* <h6>Password</h6> */}
          <Input 
           placeholder="Password At least 6 characters" 
           type="password"
           value={password}
           onChange={(e) => {
             setPassword(e.target.value)
            }}
          />
          {errorName&&password.length<=0?<p>password can't be Empty</p>:""}
          <Input 
            placeholder="confirm password" 
            type="password"
            value={cPassword}
            onChange={handleCPassword}
          />
          {errorName&&cPassword.length<=0?<p>password do not match</p>:""}
          {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}
          <Agreement>We will send you a text to verify your phone.<br></br>Message and Data rates may apply.</Agreement>
          <button className='continue'>Continue</button>
         
          <div className="detail">
            <p>Already have an account?</p>
            <NavLink to="/login" className="signin-link">
              <p>Sign in</p>
            </NavLink>
            <p>Buying for work?</p>
            <NavLink to="" className="signin-link">
              <p>Create a free business account</p>
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Register
