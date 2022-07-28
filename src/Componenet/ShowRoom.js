import React from 'react'
import Bike from '../Bikes/Bike'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function ShowRoom() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='bike' element={<Bike/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default ShowRoom