import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footer/Footer'
import ListaCategorias from './componentes/categorias/listacategorias/ListaCategorias'
import FormCategoria from './componentes/categorias/formcategoria/FormCategoria'
import DeletarCategoria from './componentes/categorias/deletarcategoria/DeletaCategoria'

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
          <Route path="/categoria/deletar/:id" element={<DeletarCategoria />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
