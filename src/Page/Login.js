import { useState } from 'react'
import styled from "styled-components";
import { mobile } from '../responsive';
import { useNavigate, NavLink } from "react-router-dom";
import  Api  from '../Api';
import "./Login.css"



const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    const valid=Api.filter((item)=>{ 
      return item.email==email&&item.password==password
      
    })
    console.log(Api)

    if(valid.length>0)
    {
      navigate("/home");
      
    }else{
      alert("email and passoword does not match")
    }
     console.log(valid,'valid')
    
  }
    
   
  return (
   <div className="login">
      <NavLink to="/">
        <img src="images/logo.png" className='login-logo' alt="logo" />
      </NavLink>
      <div className="login-container">
        <h3>Sign In</h3>
        <Form>
          E-Mail
          <input
          onChange={(e) => {
          setEmail(e.target.value)
          }}
          value={email}
          className="inputs"
          type="email" />
          <br/>
          Password     
          <input
          onChange={(e) => {
          setPassword(e.target.value)
          }}
          value={password}
          className="inputs"
          type="password" /> 
          <br/> 
          <button onClick={handleSubmit} className="login-signIn">Sign in</button>
        </Form>
        <p>By continuing, you agree to Amazon's <Link>Conditions of Use</Link> and<Link> Privacy Notice.</Link></p>
        <Link>Need help?</Link>
      </div>
      <p>New to Amazon ?</p>
      <NavLink to="/register">
        <button className='login-register'>Create Your Amazon Account</button>
      </NavLink> 
   </div>
  );
};

export default Login;
