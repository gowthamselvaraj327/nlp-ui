import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';
import Loading from '../pages/loading/Loading';
import LoginScreen from '../pages/login/LoginScreen';
import Results from '../pages/results/Results';

const Approutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/result' element={<Results />} />
      </Routes>
    </>
  );
};

export default Approutes;
