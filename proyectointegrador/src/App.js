import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"

function App() {

  const nombre = "Vibras con onda"


  return (

    <>
      <Navbar nombre={nombre} />
      <Footer />
    </>
  );
}

export default App;
