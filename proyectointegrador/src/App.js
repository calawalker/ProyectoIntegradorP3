import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Albumes from './components/Albumes/Albumes'
import Footer from "./components/Footer/Footer"
import Artistas from "./components/Podcasts/Podcasts"


function App() {

const opciones = ["Home", "Favoritos", "Ver todas"]
const nombre = "Vibras con onda"


  return (

    <>
      <Navbar opciones={opciones} nombre={nombre}/>
      <main>

      <h2>ALBUMES</h2>
      <Albumes />
      <h2>PODCASTS</h2>
      <Artistas />

      </main>

      <Footer/>
    </>
  );
}

export default App;
