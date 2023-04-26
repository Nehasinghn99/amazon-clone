import React from 'react'
import { Link } from 'react-router-dom';


const FProduct = ({title, image, specification, detail}) => {
  return (
    <div className='product'>
        <div className="product-title">
            <h6>{title}</h6>
        </div>    
        <img className='image' src={image} alt=""/>
        <div className="specification">
            <p>{specification}</p>
        </div>
        <Link to="" className='info'>{detail}</Link>
    </div>
  )
}

export default FProduct
