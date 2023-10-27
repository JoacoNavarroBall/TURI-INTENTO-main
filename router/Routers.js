import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';

import TourDetails from './../pages/TourDetails';
import ServiceCard from '../services/ServiceCard';
import Reservar from './../pages/Register';

const Routers = () =>{
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/card' element={<ServiceCard/>} />
            <Route path='/tours/:id' element={<TourDetails/>} />
            <Route path='/register' element={<Reservar/>}/>
            <Route path='/reservar/:id' element={<Reservar/>} />

        </Routes>
    )
}
export default Routers;