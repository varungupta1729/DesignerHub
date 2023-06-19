import React from 'react';
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineMessage,
    AiOutlineShoppingCart,
  } from "react-icons/ai";

const AddtoCartButton =()=>{

    return(
        <span className="text-white flex itmes-center">
        Add to Cart <AiOutlineShoppingCart className="ml-1"/>
      </span>

    );

}
export default AddtoCartButton;