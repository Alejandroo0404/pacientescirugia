
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EstadosPacientes from './components/EstadosPacientes';
import Modal from './components/Modal';
import ModalCirugia from './components/ModalCirugia';
import ModalCirugiaPalabraClave from './components/ModalCirugiaPalabraClave';
import ModalCirugiaQuirofano from './components/ModalCirugiaQuirofano';
import ModalCirugiaReservadoPor from './components/ModalCirugiaReservadoPor';
import ModalCirujanoCargo from './components/ModalCirujanoCargo';
import ModalEntidadAseguradora from './components/ModalEntidadAseguradora';
import ModalHemoderivados from './components/ModalHemoderivados';
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
        {/* <Route path='/modal' element={<ModalSalida/>}/> */}
        <Route path='/modalcirugia' element={<ModalCirugia/>}/>
        {/* <Route path='/modalcirujanocargo' element={<ModalCirujanoCargo/>}/> */}
        {/* <Route path='/modalcirugiaquirofano' element={<ModalCirugiaQuirofano/>}/> */}
        {/* <Route path='/modalreservadopor' element={<ModalCirugiaReservadoPor/>}/> */}
        {/* <Route path='/modalentidadaseguradora' element={<ModalEntidadAseguradora/>}/> */}
        {/* <Route path='/modalpalabraclave' element={<ModalCirugiaPalabraClave/>}/> */}
        <Route path='/modalhemoderivados' element={<ModalHemoderivados/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
