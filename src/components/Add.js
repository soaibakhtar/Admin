import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../Redux/action";
import { useNavigate } from "react-router-dom";

function Add() {

    const dispatch= useDispatch();
    const navigate = useNavigate()

    const [image,setImageUrl] = useState("")
    const [name,setName] = useState("")
    const [text,setText] = useState("")
    const [price,setPrice] = useState("")


    const addData = (e) => {
        e.preventDefault()
        console.log(image,name,text,price)
        const data = {image,name,text,price}
        dispatch(postData(data))
        navigate("/")
    }




  return (
    <>
      <form onSubmit={addData}>
        <input type="text" placeholder="imageurl" value={image} onChange={(e)=>setImageUrl(e.target.value)}/>
        <input type="text"  placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text"  placeholder="discription" value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type="text"  placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Add;

// "id": 1,
// "image": "https://assets.ajio.com/medias/sys_master/root/20230321/5zvc/6418f0f6aeb26924e3d6ea93/-473Wx593H-465699829-green-MODEL2.jpg",
// "name": "EYEBOGLER",
// "text": "Colourblock Half-Zip T-Shirt",
// "price": 299,
// "disc_price": 1299,
// "price_off": "77% OFF",
// "cat": "T-Shirt",
// "for": "men"
