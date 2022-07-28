import React from 'react';
import './Contact.css';
function Contact() {
  const send=()=>{
    console.log(10);
  }
  return (
    <div>
      <div>
        <form>
          <label>Ninja Show Contact Form</label><br/><br/>
          <span className='span'>Your Name:</span><br/>
          <input className='input' type='text' ></input><br/><br/>
          <span className='span'>Your Country:</span><br/>
          <input className='input' type='text' ></input><br/><br/>
          <span className='span'>Your E-mail:</span> <br/>
         <input className='input' type='text' ></input><br/><br/>
         <span className='span'>Performance Location:</span> <br/>
         <input className='input' type='text' ></input><br/><br/>
         <span className='span'>Performance data:</span> <br/>
         <input className='input' type='text' ></input><br/><br/>
         <span className='span'>Request content (Mandatory):</span><br/>
         <textarea placeholder='type here'></textarea>
        </form>
        <button className='button' onClick={()=>send()}>Send</button>
      </div>
    </div>
  )
}

export default Contact;