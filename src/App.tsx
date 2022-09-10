import React from 'react';
import logo from './logo.svg';
import './App.css';

import image from './image1.jpg';
import { Slider } from './components/slider/Slider';
import type { ISlideData } from './components/slider/Slider.props';
import { sliderData } from './components/slider/data';


function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Slider sliderData={sliderData} />
    </div>
  );
}

export default App;
