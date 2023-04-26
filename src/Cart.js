import { ListItem } from "@mui/material";
import { useState } from "react";


const Cart = ({
  cart, 
  removeFromCart,
  clearCart,
}) => 
{
  const getTotalSum = () => {
    return cart.reduce(
      (sum, {price, quantity }) => sum + price * quantity, 0
    )
  }
 
  // const [quantity, setQuantity] = useState(1)
  // const handleIncreament = () => {
  //   setQuantity((pre)=>{
  //     return pre+1
  //   })
  // }
  // const handleDecrement = () => {
  //   setQuantity((pre)=>{
  //     return pre+1
  //   })
  // }
 
  return (
    <>
      <h1 className='title'>Cart</h1>
      <div className="cards">
        {cart.map((values, id) => (
          <div className='card' key={id}>
            <img src={values.image} alt={values.title}/>
            <h3>{values.title}</h3>
            <h6>Price $ {values.price}</h6>
            <div>Qty({values.quantity})</div>
            <h6>Total price $ {values.price * values.quantity}</h6>
            <button className='btn btn-success' onClick={() => removeFromCart(values)}>Remove</button>
          <div>
          </div>
          </div>
        ))}

        <div className="col-auto ms-auto">
          <h2>Total Amount: $ {getTotalSum()}</h2>
          {cart.length > 0 && (
            <button className='btn btn-danger m-2' onClick={clearCart}>Clear Cart</button>
          )}
        </div>
      </div>
    </>
  )
}


export default Cart