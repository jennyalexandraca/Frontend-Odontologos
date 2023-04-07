import { Outlet, Link, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./Routes/Home"
import DetailCard from "./Components/DetailCard"
import Contacto from "./Routes/Contacto"
import Destacados from "./Routes/Destacados"
import { lightTheme, darkTheme } from './styles/styles';
import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div
      style={{
        backgroundColor: theme === 'light' ? lightTheme.background : darkTheme.background,
        color: theme === 'light' ? lightTheme.color : darkTheme.color,
      }}
      >
        <Navbar toggleTheme={toggleTheme}/>
        <main></main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/detalles/:id" element={<DetailCard/>} />
          <Route path="/destacados" element={<Destacados/>}/>
          <Route path="*" element={
            <>
              <h1>Error 404</h1>
              <p>No se encuentra el sitio</p>
            </>
          }/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
