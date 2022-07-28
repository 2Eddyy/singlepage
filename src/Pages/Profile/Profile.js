import React from 'react'
import './Profile.css'
function Profile() {
  return (
    <div>
      <div>
        <h2>Show Discription</h2>
        <p className='p'>As our show is dialogue-free, anyone can enjoy our show and watch cool ninja movements and action.<br />
          We provide various types of shows that are customizable to the budget and venue size.<br /> Ceremonial photographs at the end of the show are also available at your request.<br />
          In addition, we can hold ninja classes in which children can participate.</p>
      </div>
      <div>
        <h2>Our Achievements</h2>
        <ol>
          <li className='ol'> Performing Ninja Show in Japan and overseas including UAE, Vietnam, Malaysia and Indonesia.</li>
          <li className='ol'>Regular appearance at the Osaka Certified Ninja Show</li>
          <li className='ol'>Management of ninja classes in which over 30,000 children have participated to date</li>
          <li className='ol'>Multiple appearances on Japanese Media</li>
        </ol>
      </div>
      <div>
        <h2>Order Flow</h2>
        <ol>
          <li className='ol'>Confirm show content and schedule</li>
          <li className='ol'>Quote proposal</li>
          <li className='ol'>Order</li>
          <li className='ol'>100% payment of flight fees, accommodation fees, and transportation fees. 50% of the performance fee.</li>
          <li className='ol'>Order confirmation</li>
          <li className='ol'>Departure. Meeting on the day before the show</li>
          <li className='ol'>Show date</li>
          <li className='ol'>Return</li>
          <li className='ol'>Payment of the remaining 50% of the performance fee.</li>
        </ol>
      </div>
      <div>
        <h2>Payment</h2>
        <p className='p'>Payment is accepted by credit card or international transfers.</p>
        <p className='p'>A separate PayPal invoice will be issued for payments done by credit card.</p>
        <p className='p'>*Commission fees will be applied for international transfers.</p>
      </div>
      <div>
        <h2>Cancellation</h2>
        <h5>［How to cancel］</h5>
        <p className='p'>Cancellation fees will be applied according to the number of days between the date of the show and the date when the office has received the cancellation confirmation email.</p>
        <h5>［Cancellation Fee］</h5>
        <p className='p'>Cancellation fee varies depending on the day when your cancellation is completed.</p>
        <p className='p'>● 60 days before the show date: No cancellation fees will be applied.</p>
        <p className='p'>● Between 59 and 15 days before the show date: A cancellation fee of 50% will be applied.</p>
        <p className='p'>● Between 14 and 2 days before the show date: A cancellation fee of 80% will be applied.</p>
        <p className='p'>● The show date: A cancellation fee of 100% will be applied.</p>
      </div>
    </div>
  )
}

export default Profile