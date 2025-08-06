import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footer/Footer'
import ListaCategorias from './componentes/categorias/listacategorias/ListaCategorias'
import FormCategoria from './componentes/categorias/formcategoria/FormCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <div className="min-h-[80vh]"></div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/categoria/adicionar" element={<FormCategoria />} />
          <Route path="/categoria/editar/:id" element={<FormCategoria />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
