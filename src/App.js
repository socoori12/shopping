import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './compo/Nav.jsx';
import Head from './compo/Head.jsx';
import Home from './page/Home.jsx';
import Acc from './page/Acc.jsx';
import Boottoms from './page/Bottoms.jsx';
import Shose from './page/Shose.jsx';
import Tops from './page/Tops.jsx';

import  './styles/main.scss';
const Placeholder = ({ name }) => <div style={{ padding: "20px", fontSize: "24px" }}>{name} 페이지</div>;
function App() {
  return (
    <div className="App">
        <Head />
        <Nav />
          <div className='context'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tops" element={<Tops />} />
            <Route path="/Bottoms" element={<Boottoms />} />
            <Route path="/Acc" element={<Acc />} />
            <Route path="/Shoes" element={<Shose />} />
          </Routes>
          </div>
    </div> // app end
  );
}

export default App;
