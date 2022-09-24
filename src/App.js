import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './nav/Home';
import Students from './nav/Students';
import Contect from './nav/Contect';
import Mainheader from './nav/Mainheader';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainheader/>} >
      <Route index element={<Home/>} />
      <Route path='students' element={<Students/>}/>
      <Route path='contect' element={<Contect/>}/>
      </Route>
    </Routes>
    
    
    </BrowserRouter>
    
    </>
    
  )
}

export default App;
