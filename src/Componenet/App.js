import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import Profile from '../Pages/Profile/Profile'
import ShowRoom from './ShowRoom'
import Bike from '../Bikes/Bike'
import './App.css';
import Card from '../Pages/Cards/Card'
import Fav from '../Pages/Faviourte/Fav'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='Container'>
          <img className='image' src='./ninja.jpg' alt=''></img>
          <a href='search'><SearchIcon className='search'></SearchIcon></a>
          <ul className='links'>
            <li>
              <Link to='add'>
                <AddShoppingCartIcon className='button1' />
              </Link>
            </li>
            <li>
              <Link to='fav'>
                <FavoriteIcon className='button2' />
              </Link>
            </li>

            <li>
              <Link to='bike'>ShowRoom</Link>
            </li>
            <li>
              <Link to='home'>Home</Link>
            </li>
            <li>
              <Link to='profile'>Profile</Link>
            </li>
            <li>
              <Link to='contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          {/* <Route path='/' element={<App />}></Route> */}
          <Route path='home' element={<Home />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='showroom' element={<ShowRoom />}></Route>
          <Route path='bike' element={<Bike />}></Route>
          <Route path='add' element={<Card/>}></Route>
          <Route path='fav' element={<Fav/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App