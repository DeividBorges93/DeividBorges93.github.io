import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home'
import AboutMe from '../pages/Aboutme';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Navigate to="/inicio" /> } exact path="/" />
        <Route element={ <Home />} path='/inicio' />
        <Route element={ <AboutMe />} path='/sobremim' />
        <Route element={ <Projects />} path='/projetos' />
        <Route element={ <Contact />} path='/contato' />
      </Routes>
    </BrowserRouter>
  )
}