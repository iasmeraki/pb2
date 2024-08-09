import { Routes, Route } from "react-router-dom"


// Componentes
import Header from './assets/Components/Header'
import Livros from './assets/Components/Livros';
import Sagas from './assets/Components/Sagas';
import Filmes from "./assets/Components/Filmes";
import Projeto from "./assets/Components/Projeto";
import Home from "./assets/Components/Home";

// Css
import './styles.global.css'





function App() {


  return (
    <>
      <div>
        <Header />

        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="/Livros" element={<Livros/>} />

          <Route path="/Sagas" element={<Sagas/>} />

          <Route path="/Filmes" element={<Filmes/>} />

          <Route path="/Projeto" element={<Projeto/>} />

        </Routes>

      </div>
    </>
  )
}

export default App
