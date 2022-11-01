import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Laptops from './Laptops';
import Laptopsid from './Laptops_id';
import Payment from './Payment';
import AddLaptop from './AddLaptop';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Routes>
         <Route path='/' element={<Layout/>}>
             <Route index element={<Laptops/>}></Route>
             <Route path='/Laptops_id/:id' element={<Laptopsid/>}></Route>
             <Route path='/AddLaptop' element={<AddLaptop/>}></Route> 
             <Route path='/Update/:id' element={<AddLaptop/>}></Route>
             <Route path='/Payment/:id' element={<Payment/>}></Route>
             <Route path='/Laptops' element={<Laptops/>}></Route>
         </Route>
      </Routes>
  </BrowserRouter>
);

