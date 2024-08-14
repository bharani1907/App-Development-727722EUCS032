// src/App.jsx
import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";
import Book from "./components/Book";
import Payment from "./components/Payment";
import Login from "./components/Login";
import Adminlogin from "./components/Adminlogin";
import Logout from "./components/Logout";
import Elegantvenue from "./components/Venue details/Elegentvenue";
import Customizedinvitation from "./components/Venue details/Customizedinvitation";
import Enchantingdecoration from "./components/Venue details/Enchantingdecoration";
import Gourmetcatering from "./components/Venue details/Gournetcatering";
import Creativecakes from "./components/Venue details/Creativecakes";
import Liveenter from "./components/Venue details/Liveenter";
import Venues from "./components/Venues";
import Adminauth from "./components/Adminauth";

import Book1 from "./components/Booking/Book1";
import Book2 from "./components/Booking/Book2";
import Book3 from "./components/Booking/Book3";
import Book4 from "./components/Booking/Book4";
import Book5 from "./components/Booking/Book5";
import Book6 from "./components/Booking/Book6";
import Book7 from "./components/Booking/Book7";
import Book8 from "./components/Booking/Book8";


function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/payment" element={<Payment />} />
          
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/adminauth" element={<Adminauth/>} />


          <Route path="/book1" element={<Book1 />} />
          <Route path="/book2" element={<Book2/>} />
          <Route path="/book3" element={<Book3/>} />
          <Route path="/book4" element={<Book4/>} />
          <Route path="/book5" element={<Book5/>} />
          <Route path="/book6" element={<Book6/>} />
          <Route path="/book7" element={<Book7/>} />
          <Route path="/book8" element={<Book8/>} />
          
            
          <Route path="/singleService/001" element={<Elegantvenue />} />
          <Route path="/singleService/002" element={<Customizedinvitation />} />
          <Route path="/singleService/003" element={<Enchantingdecoration />} />
          <Route path="/singleService/004" element={<Gourmetcatering />} />
          <Route path="/singleService/005" element={<Creativecakes />} />
          <Route path="/singleService/006" element={<Liveenter />} />


          
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
