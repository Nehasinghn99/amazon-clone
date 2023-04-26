import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import  './Products.css';
import Categories from '../Categories';
import { useCart } from 'react-use-cart';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({addToCart}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const[data, setData] = useState(Categories)

  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
        return curDate.category === catItem;
    });
    setData(result);
  }
 
 const handleDecrement = (card_id) => {
    setData(cart => 
      data.map( (values) =>
      card_id === values.id ? {...values, quantity: values.quantity - (values.quantity > 1 ? 1:0)} : values
      )
    );
  }
  console.log(data)
  const handleIncreament = (card_id) => {
    setData(cart => 
      data.map( (values) =>
      card_id === values.id ? {...values, quantity: values.quantity + (values.quantity < 10 ? 1:0)} : values
      )
    );
  }
 
  return (
    <>
    <h2>PRODUCTS</h2>
      <div className="searchInput_Container">
        <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />
      </div>  
      <div className="col">
          <button className='btn' onClick={() => setData(Categories)}>ALL</button>
          <button className='btn' onClick={() => filterResult('Men')}>MEN</button>
          <button className='btn' onClick={() => filterResult('Women')}>Women</button>
          <button className='btn' onClick={() => filterResult('Kids')}>KIDS</button>
          <button className='btn' onClick={() => filterResult('Shoe')}>SHOE</button>
          <button className='btn' onClick={() => filterResult('Electronics')}>ELECTRONICS</button>
      </div>
      <div className="cards">
        {
          data
          .filter((values) => {
            if(searchTerm == ""){
              return values;
            }else if(values.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return values;
            }
          })
          
          .map((values, id) => {
            return(
              <div className="card" key={id}>
                <img src={values.image} alt="" />
                <h3>{values.title}</h3>
                <h6>Price $ {values.price}</h6>
                <div style={{display: "flex"}}>
                  <button className='btn btn-info ms-2 ' onClick={() => handleDecrement(values.id)}>-</button>
                  <div>{values.quantity}</div>
                  <button className='btn btn-info ms-2' onClick={() => handleIncreament(values.id)}>+</button>
               </div>
               <h6>Total price $ {values.price * values.quantity}</h6>
                <button className='btn btn-success' onClick={() => addToCart(values)}>Add to cart</button>
              </div> 
            )
          })
        }
      </div>
    </>
  )
}

export default Products
