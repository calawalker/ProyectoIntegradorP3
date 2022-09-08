import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import Home from "./screens/Home/Home"


function App() {

const opciones = ["Home", "Favoritos", "Ver todos los albumes", "Ver todos los podcasts"]
const nombre = "Vibras con onda"


  return (

    <>
      <Navbar opciones={opciones} nombre={nombre}/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
