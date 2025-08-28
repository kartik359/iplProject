import React from 'react'
import Home from '../component/Home'
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import MatchDetail from '../component/MatchDetail'
import Navbar from '../component/Navbar'
import PointsTable from '../component/PointsTable'
import News from '../component/News'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="MatchDetail/:id" element={<MatchDetail/>}/>
      <Route path="/table" element={<PointsTable/>}/>
      <Route path="/news" element={<News/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
