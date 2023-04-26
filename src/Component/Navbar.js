import React,{useState} from 'react'
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TimesOneMobiledataIcon from '@mui/icons-material/TimesOneMobiledata';
import styled from 'styled-components';
import {  NavLink } from 'react-router-dom';
import "./Navbar.css"
import PropTypes from 'prop-types';

    
// const Container = styled.div`
//  height: 90px;
// `;
// const InputContainer = styled.div`
// width: 200%;
// height: 40px;
// background-color: white;
// display: flex;
// justify-content: space-between;
// border: 1px solid lightgray;
// `;

// const Input = styled.input`
// border: none;
// flex: 8;
// padding-left: 20px;
// `;
// const Template = styled.div``;

// const Button = styled.button`
//  flex: 1;
//  border: none;
//  background-color: teal;
//  color: white;
// `;

function Navbar() {
  return (
    
    <nav className='header'>
      <NavLink to="/home">
        <img 
        className='header-logo' 
        src="images/amazon.png" 
        alt="amazon_logo"
        />
      </NavLink>
      {/* <a className="header-logo" aria-current="page" href="/home">Amazon</a> */}
      <div className="header-option" style={{marginRight:"-10PX"}}>
        <RoomIcon/>
      </div>
      <div className="header-option">
        <span className="header-option1">Hello</span>
        <span className="header-option2">Select Your Address</span>
      </div>
      <div className="search">
        <select>
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
          <option>Shoe</option>
          <option>Electronics</option>
        </select>
        <input type="text" className='searchInput'/>
        <SearchIcon className='searchIcon'/>
      </div>
      <div className="Language">EN</div>
      <NavLink to="/" className="header-link">
        <div className="header-option">
          <span className="header-option1">Hello, Sign in</span>
          <span className="header-option2">Account & Lists</span>
        </div>
      </NavLink>
      <NavLink to="/orders" className="header-link">
        <div className="header-option">
          <span className="header-option1">Returns</span>
          <span className="header-option2">& Orders</span>
        </div>
      </NavLink>
      <NavLink to="/checkout" className="header-link">
        <div className="header-basket">
          <ShoppingCartOutlinedIcon/>
          <span className="header-option2 basket-count">Cart</span>
        </div>
      </NavLink>
    </nav>
     

    // <Container>
    //   <header className='header'>
    //     <nav className='navbar navbar-dark bg-dark'>
    //       <div className="container-fluid">
            
    //         <a className="navbar-brand mb-0 h1 active" aria-current="page" href="/">Amazon.in</a>
            
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //               <NavLink className="nav-link active" aria-current="page" to="/">
    //               <RoomIcon/>Hello<br></br>Select your address</NavLink>
    //             </li>
    //           </ul>
    //           <from className="d-flex" role="search" >
    //             <InputContainer>
    //               <Input placeholder="Search here..."/>
    //               <Button>
    //                 <SearchIcon/>
    //               </Button>
    //             </InputContainer>        
    //           </from>
    //           <div className="Language">EN</div>
    //           <ul className="navbar-nav">
    //             <li className="nav-item dropdown">
    //               <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                 Hello, Sign in<br></br>
    //                 Account & Lists
    //               </a>
                  
    //               <ul className="dropdown-menu">
    //                 <li>
    //                   <NavLink to="/register">Register</NavLink>
    //                 </li>
    //                 <li>
    //                   <NavLink to="/login">Login</NavLink>
    //                 </li>
    //                 <li>
    //                   <NavLink to="/your Account">Your Account</NavLink>
    //                 </li>
    //               </ul>
    //             </li>
    //           </ul>
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //                 <a className="nav-link active" aria-current="page" href="/">
    //                   Returns<br></br>& Orders</a>
    //             </li>
    //           </ul>

    //           {/* <div className="MenuItem">
    //             <Badge badgeContent={4} color="primary">
    //               <ShoppingCartOutlinedIcon>
    //               </ShoppingCartOutlinedIcon>
    //               <NavLink to="/cart">Add to Cart</NavLink>
    //             </Badge>
    //           </div> */}
    //         <div className="header-links"> 
    //           <ul>
    //             <li>
    //               <Link to="/cart" className='cart'>
    //               <i class="fas fa-shopping-cart"/>
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   </header>
      
    // </Container>
  )
}

export default Navbar

Navbar.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
  onEmptyCart: PropTypes.func,
};
