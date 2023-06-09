import React from 'react'
import "./Product.css";
import { NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = ({id, title, image, price, rating, specification, detail}) => {
  return (
    <div className='product'>
        <div className="info">
            <NavLink to={'/products/${id}'} className="title">
                <p>{title}</p>
            </NavLink>
            <p className='price'>
                <strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className="rating">
                {Array(rating)
                .fill()
                .map((_, index) => (
                <p key={index}>⭐</p>
                ))}
            </div>
        </div>    
        <img src={image} alt=""/>
        <button>
            <i>
                <ShoppingCartOutlinedIcon/>
            </i>
            Add To Basket
        </button>
       
    </div>
  )
}

export default Product
