import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Albumes from './components/Albumes/Albumes'
import Footer from "./components/Footer/Footer"


function App() {

const opciones = ["Home", "Favoritos", "Ver todas"]
const nombre = "Vibras con onda"


  return (

    <>
      <Navbar opciones={opciones} nombre={nombre}/>
      <main>
      <Albumes />

      </main>

      <Footer/>
    </>
  );
}

export default App;
