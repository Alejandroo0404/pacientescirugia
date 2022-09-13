
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PacientesCirugias from './pages/PacientesCirugias';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pacientescirugia' element={<PacientesCirugias/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
