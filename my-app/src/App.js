import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Home} from "./Home";
import {Dersler} from "./Dersler";
import {Arastirmalar} from "./Arastirmalar";
import {Ekibimiz} from "./Ekibimiz";
import {Isbirlikcilerimiz} from "./Isbirlikcilerimiz";


const App = () => {

  return(
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Navigate replace to="/home" />} />  
        <Route path="/dersler" element={<Dersler/>}/> 
        <Route path="/arastirmalar" element={<Arastirmalar/>}/>         
        <Route path="/ekibimiz" element={<Ekibimiz/>}/> 
        <Route path="/isbirlikcilerimiz" element={<Isbirlikcilerimiz/>}/> 
      </Routes>
    </BrowserRouter>
  )
};

export default App;