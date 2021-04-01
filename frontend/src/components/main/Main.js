import React, { useState, useEffect } from "react";
import Fetch from "../fetch/Fetch";
import Header from "../header/Header";
import Item from "../item/Item";
import './Main.css'

const Main = () => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Fetch('/items', 'GET', '')
      .then(result => {
        setItems(result);
      })
      .catch(error => {
        setError(error.toString());
      })
  }, []);

  return(
    <div className='main-container'>
      <Header />
      <div className='items'>
        {
          items.map(item => {
            return(
              <Item className='item-container' itemname={item.itemname} description={item.description} price={item.price}/>
            )
          })
        }
      </div>
      {error && <p className='item-error'>{error}</p>}
    </div>
  );
}

export default Main;
