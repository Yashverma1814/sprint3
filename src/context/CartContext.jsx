import React, { createContext, useEffect } from "react";
import axios from "axios"
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const fetchCart = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/cartItems"
    }).then(res => {
      setCart(res.data)
    })
  }

  const handleAdd = (id) => {
    const item = cart.find((el) => el.productId = id);
    if (item === undefined) {
      axios({
        method: "post",
        url: "http://localhost:8080/cartItems",
        data: {
          count: 1,
          productId: id,
          id,
        }
      }).then(res => {
        fetchCart();
      })
    }
    // else{
    //   axios({
    //     method:"patch",
    //     url:"http://localhost:8080/cartItems/"+id, 
    //     data:{
    //       count: item.count+1,
    //     }
    //   }).then(res=>{
    //     fetchCart();
    //   })
    // }
  }
  const handleIncrement = (id) => {
    const item = cart.find((el) => el.productId = id);
    axios({
      method: "patch",
      url: "http://localhost:8080/cartItems/" + id,
      data: {
        count: item.count + 1,
      }
    }).then(res => {
      fetchCart();
    })
  }
  const handleDecrement = (id) => {
    const item = cart.find((el) => el.productId = id);
    if (item.count == 1) {
      axios({
        method: "delete",
        url: "http://localhost:8080/cartItems/" + id,
      }).then(res => {
        fetchCart();
      })
    }
    else {
      axios({
        method: "patch",
        url: "http://localhost:8080/cartItems/" + id,
        data: {
          count: item.count - 1,
        }
      }).then(res => {
        fetchCart();
      })
    }
  }
  const handleRemove = (id) => {
    const item = cart.find((el) => el.productId = id);
    axios({
      method: "delete",
      url: "http://localhost:8080/cartItems/" + id,
    }).then(res => {
      fetchCart();
    })
  }

  const value = {
    cart,
    handleAdd,
    handleDecrement,
    handleIncrement,
    handleRemove
  }
  useEffect(() => [
    fetchCart()
  ], [])


  return <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>;
};
