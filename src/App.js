import { Routes, Route, Router } from "react-router-dom";

import { BrowserRouter} from 'react-router-dom';
import './App.css';
// import Parte2 from './Parte2.js';
import Preje from './New folder/Preje';
import Preje1 from './New folder/Preje1.jsx'
import Naveber from './New folder/Naveber.js';
import Afficher from './Ex1/Gestion_BIBLIO.js'
import Headre  from "./Ex1/Header.jsx";
import TestApi from '../src/Ex1/TestApi.js';
import AjouterLivre from './Ex1/Gestion_Ajouter.js'
import Parte2 from './New folder/Parte2.js'


function App() {
  return (
  <BrowserRouter>
  <Naveber />
    <Routes>
      <Route path="Preje1" element={<Preje1 />}/>
      <Route path="Preje" element={<Preje />} />
      <Route path="*" element={<Afficher />}/>
      <Route path="Headre" element={<Headre />}/>
      <Route path="Api" element={<TestApi />} />
      <Route path="AjouterLivre" element={<AjouterLivre />}/>
      <Route path="Parte2" element={<Parte2 />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
