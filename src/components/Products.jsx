import React, { useContext, useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { CartContext } from "../context/CartContext";
export const Products = () => {
  const [products,setProducts] = useState([])
  const {cart} = useContext(CartContext);
  useEffect(()=>{
    axios({
      method:"get",
      url:"http://localhost:8080/products"
    }).then(res =>{
      setProducts(res.data)
      console.log(res);
    }).catch(err=>console.log(err));
  },[])
  return (
  <div>
    <div>{cart.reduce((prev, curr)=>prev + curr.count, 0)}</div>
    {products.map((el, ind)=><ProductItem {...el}/>)}
  </div>
  );
};