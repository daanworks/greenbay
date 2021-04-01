import React from "react";
import './Item.css'

const Item = (props) => {

  const itemname = props.itemname;
  const description = props.description;
  const price = props.price;

  return(
    <div className='item-container'>
      <p>{itemname}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Item;
