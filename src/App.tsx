import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/NavBar'
//import de cargos
//impor de funcionarios
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Funcionario />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;