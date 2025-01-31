import { Routes, Route } from "react-router-dom";

import { BrowserRouter} from 'react-router-dom';
import './App.css';
// import Parte2 from './Parte2.js';
import Preje from './New folder/Preje';
import Preje1 from './New folder/Preje1.jsx'
import Naveber from './New folder/Naveber.js';
import F from './New folder/Parte2.js'
import Headre  from "./Ex1/Header.jsx";
import TestApi from '../src/Ex1/TestApi.js'


function App() {
  return (
  // <>
  // {/* <Preje1 /> */}
  // {/* <Preje /> */}
  // {/* <Parte2 /> */}
  // <Headre />
  // </>

  <BrowserRouter>
  <Naveber />
    <Routes>
      <Route path="Preje1" element={<Preje1 />}/>
      <Route path="Preje" element={<Preje />} />
      <Route path="*" element={<F />}/>
      <Route path="Headre" element={<Headre />}/>
      <Route path="Api" element={<TestApi />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
