<<<<<<< HEAD
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/NavBar'
//import de cargos
import Funcionario from './models/Funcionario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Funcionario />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
=======

import './App.css'
import Navbar from './components/navbar/NavBar'

function App() {
  return (
    <>
    <Navbar />

    </>
  )
}

export default App;
>>>>>>> ccdbb6ff7f285025c206f569c56bb0baa6435d03
