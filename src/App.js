
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BuscarPacienteParaQX from './pages/BuscarPacienteParaQX';
import CambioEstado from './pages/CambioEstado';
import Cirugia from './pages/Cirugia';
import PacientesCirugias from './pages/PacientesCirugias';
import SeleccionarUnQX from './pages/SeleccionarUnQX';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pacientescirugia' element={<PacientesCirugias/>}/>
        <Route path='/cambioestado' element={<CambioEstado/>}/>
        <Route path='/buscarpacienteparaqx' element={<BuscarPacienteParaQX/>}/>
        <Route path='/seleccionarunqx' element={<SeleccionarUnQX/>}/>
        <Route path='/cirugia' element={<Cirugia/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
