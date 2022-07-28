import React, { useState } from 'react'
import Products from '../Bikes/Products.json'
import './Bike.css';
function Card() {

  const [name, setName] = useState([Products]);
  console.log(name);
  const addtocard = (prod) => {

    localStorage.setItem("cardItem", JSON.stringify([prod]));

console.log(setName);
  }

  return (
    <div className='main1'>
      <div className='container'>
        {Products.map((prod, index) => (
          <div className='main' key={index}>
            <p ><img className='imagee' src={prod.image} alt=''></img></p>
            <h1 className='namee'>{prod.name}</h1>
            <h3 className='model'>{prod.model}</h3>
            <h4 className='cc'>{prod.cc}</h4>
            <button className='btn1' onClick={() => addtocard(prod)}>Add To Card</button>
            <button className='btn2' onClick={() => addtocard(prod)}>Favourite</button>
          </div>
        ))}
      </div><br />
    </div>
  )
}
export default Card;