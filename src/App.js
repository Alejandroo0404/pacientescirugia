
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EstadosPacientes from './components/EstadosPacientes';
import Modal from './components/Modal';
import ModalSalida from './components/ModalSalida';
import BucarPacienteProgramacionCirugia from './pages/BucarPacienteProgramacionCirugia';
import BuscarPacienteParaQX from './pages/BuscarPacienteParaQX';
import CambioEstado from './pages/CambioEstado';
import Cirugia from './pages/Cirugia';
import PacientesCirugias from './pages/PacientesCirugias';
import ProgramacionCirugia from './pages/ProgramacionCirugia';
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
        <Route path='/salida' element={<ModalSalida/>}/>
        <Route path='/programacioncirugia' element={<ProgramacionCirugia/>}/>
        <Route path='/estadospacientes' element={<EstadosPacientes/>}/>
        {/* <Route path='/modal' element={<Modal/>}/> */}
        <Route path='/buscarpacienteprogramacioncirugia' element={<BucarPacienteProgramacionCirugia/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
