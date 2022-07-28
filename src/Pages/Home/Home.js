import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
      <div className='home'>
        <h2><i>2022</i></h2>
        <h1 className='name'>NINJA H2R</h1>
        <div className='home1'>
          <img className='bike' src='./ninjabike.jpg' alt='Ninja bike'></img>
          <ul className='link'>
            <li className='li'>Product pictures shown are for illustration purpose only.</li>
            <li className='li'>Actual product may vary from the picture shown here.</li>
            <li className='li'>Specification and pricing are subject to change.</li>
          </ul>
        </div><br />
        <div className='child'>
          <p>Starting At</p>
          <h3>Rs.79,90,000</h3>
          <p>(Ex-Showroom)</p>
        </div>
      </div>
      <div className='parent'>
        <div className='semi1'>
          <div className='prod1'>
            <img className='img1' src='./img1.jpg' alt='image' width='150px' height='100px'></img>
            <div className='child1'>
              <h4 className='h41'>Brembo Brakes</h4>
              <p className='text1'>A pair of massive ø330 mm Brembo <br />  semi-floating discs with a thickness of t5.5 mm<br />  deliver superb braking force.</p>
            </div>
          </div><br />
          <div className='prod2'>
            <img className='img1' src='./img2.jpg' alt='image' width='150px' height='100px'></img>
            <div className='child1'>
              <h4 className='h41'>Single-sided Swingarm</h4>
              <p className='text1'>Having a single-sided swingarm allows the<br /> exhaust silencer to be mounted closer <br />to the bike centreline, ensuring a<br /> high bank angle for sporty cornering.</p>
            </div>
          </div><br />
          <div className='prod3'>
            <img className='img1' src='./img3.jpg' alt='image' width='150px' height='100px'></img>
            <div className='child1'>
              <h4 className='h41'>Riding Position & Ergonomics</h4>
              <p className='text1'>The riding position was designed for riding at<br /> ultra-high speed and circuit riding. To help <br />support the rider during intense acceleration, <br /> hipsupporting pads flank the rear of the seat.support is <br />adjustable 15 mm backward to suit rider size.</p>
            </div>
          </div><br />
          <div className='prod4'>
            <img className='img1' src='./img4.jpg' alt='image' width='150px' height='100px'></img>
            <div className='child1'>
              <h4 className='h41'>Oil Jets</h4>
              <p className='text1'>In the interest of keeping the engine compact<br /> and simple, a single lubrication system provides <br />cooling oil for the engine components,<br /> supercharger and transmission.</p>
            </div>
          </div><br />
          <div className='prod5'>
            <img className='img1' src='./img5.jpg' alt='image' width='150px' height='100px'></img>
            <div className='child1'>
              <h4 className='h41'>Electronic Throttle Valves</h4>
              <p className='text1'>Kawasaki’s fully electronic throttle actuation<br /> system enables the ECU to control the volume of<br />  both the fuel (via fuel injectors) and the air<br />  (via throttle valves) delivered to the engine.<br />  Ideal fuel injection and throttle valve position results <br /> in smooth, natural engine response and the ideal<br />  engine output. The system also makes a significant <br /> contribution to reduced emissions</p>
            </div>
          </div>
        </div><br />
        <div className='semi2'>
          <div className='prod6'>
            <img className='img1' src='./img6.jpg' alt='image' width='150px' height='100px'></img>
            <div className='child1'>
              <h4 className='h41'>Kawasaki Original Silver-mirror Paint</h4>
              <p className='text1'>Kawasaki’s new Highly Durable paint features a <br />special coat that allows scratches to repair themselves,<br /> enabling the paint to maintain its high-quality finish†.<br /> * Soft and hard segments in the coat work together<br /> like a chemical spring, creating a trampoline<br /> effect that absorbs impacts. † Notes: 1. In some cases,<br /> it takes about one week for recovery. 2.<br /> The paint will not recover in the case of scratches<br /> caused by a coin or key, or zip fasteners.</p>
            </div>
          </div><br />
          <div className='prod7'>
            <img className='img1' src='./img7.jpg' alt='image' width='150px' height='100px'></img>
            <div className='child1'>
              <h4 className='h41'>Öhlins TTX36 Rear Suspension</h4>
              <p className='text1'>The addition of Öhlins’ highly acclaimed<br /> TTX shock offers numerous rider benefits:<br />- Increased rear stability <br />- excellent damping and increased riding comfort <br />- Increased rear stability <br />- Superb feedback from the road<br />- More stability at speed.</p>
            </div>
          </div><br />
          <div className='prod8'>
            <img className='img1' src='./img8.jpg' alt='image' width='150px' height='100px'></img>
            <div className='child1'>
              <h4 className='h41'>Aerodynamically-designed Bodywork</h4>
              <p className='text1'>It is no accident that when viewed from the side,<br /> the Ninja H2R does not seem to have <br />  the aggressive forward-canted stance of most <br />  modern supersport models.</p>
            </div>
          </div><br />
          <div className='prod9'>
            <img className='img1' src='./img9.jpg' alt='image' width='150px' height='100px'></img>
            <div className='child1'>
              <h4 className='h41'>Exhaust System</h4>
              <p className='text1'>All-titanium exhaust system has a very simple<br /> design consisting of the header and collector pipes,<br /> a joint pipe, and a straightpipe megaphone<br />-style silencer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home