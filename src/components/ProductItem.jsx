import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ProductItem = ({name, description, id}) => {
  const {cart,handleAdd,handleDecrement,handleIncrement,handleRemove} = useContext(CartContext);

  return <div>
    <div className="name">{name}</div>
    <div className="desc">{description}</div>
    <div>{cart.find((el)=>el.productId===id)?.count}</div>
    <button onClick={()=>handleAdd(id)} className="add">Add To Cart</button>
    <button onClick={()=>handleIncrement(id)} className="inc">Increment</button>
    <button onClick={()=>handleDecrement(id)} className="dec">Decrement</button>
    <button onClick={()=>handleRemove(id)} className="remove">Remove</button>
  </div>;
};
