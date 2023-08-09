// resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import Cursos from './Cursos';
import Contacto from './Contacto';
import About from './About';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ComprarCursos from './ComprarCursos';
import ListaCursos from './ListaCursos';
import { Routes, Route } from 'react-router-dom';

export default function Home(){
    return(
        <div>
  <Routes>
           <Route path="/" element={<Cursos />} />
           <Route path="/contacto" element={<Contacto />} />
           <Route path="/acerca" element={<About />} />
           <Route path="/login" element={<Login />} />
           <Route path="/registrar" element={<Register />} />
           <Route path="/listaCursos" element={<ListaCursos />} />
           <Route path="/cursos" element={<ComprarCursos />} />
           <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
     </div>
    );
}

if(document.getElementById('root')){
   const root=createRoot(document.getElementById('root'));
   root.render(
    <React.StrictMode>
       <BrowserRouter>
          <Home />
       </BrowserRouter>
    </React.StrictMode>
   );

}