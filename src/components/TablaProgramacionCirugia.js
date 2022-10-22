import axios from 'axios';
import React, { useState } from 'react'
//import Cirugia from '../pages/Cirugia';
//import Modal from "./Modal";
import ModalCirugia from './ModalCirugia';

const TablaProgramacionCirugia = (props) => {
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false)
    const [cirugiaPaciente, setCirugiaPaciente] = useState(false)
    console.log(props.user)
    const modificar = ()=>{
        // if(cirugiaPaciente){
        //   setCirugiaPaciente(false)
        // }else if(!cirugiaPaciente){
        //   setCirugiaPaciente(true)
        // }
        setModalOn(true)
      }

    const handleState = async (e) =>{
        e.preventDefault();
        
       
        let fecha = new Date();
        let mes = `${fecha.getMonth() + 1}`    
        if(mes.length === 1){
          mes = "0" + mes
        }
        let dia = `${fecha.getDate()}`
        if(dia.length === 1){
          dia = "0" + dia
        }
        
        const body = {
          Id_cirugia: props.user["ProCirCod "],
          cedula_paciente: props.user.HISCKEY,
          nombre_cirujano: props.user.MPNOMC,
          nombre_paciente: props.user.MPNOMC,
          estado_paciente: e.target.value,
          fecha_cambio_estado: `${fecha.getFullYear()}-${mes}-${dia}`,
          hora_cambio_estado: `${fecha.getHours()}:${fecha.getMinutes()}`,
        };
        await axios.post("http://127.0.0.1:8000/api/agregar/paciente", body); 
      }
  return (
    
        <>
         
        <tr className="bg-white border-b">
          <td>
            <div className="pt-2 w-40">
              <div className="mb-3 xl:w-96">
                <select onChange={handleState} className="form-select block w-40 px-3 py-1.5 text-base font-medium text-gray-700 bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                  aria-label="Default select example">
                    <option value="pendiente">Pendiente</option>
                    <option value="reservado">Reservado</option>
                    <option value="confirmado">Confirmado</option>
                    <option value="ingreso a sala">Ingreso a sala</option>
                    <option value="preparado">Preparación</option>
                    <option value="cirugia">Cirugía</option>
                    <option value="recuperacion">Recuperación</option>
                    <option value="salida">Salida</option>
                </select>
              </div>
            </div>
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-pre-wrap">
            {props.user["ProCirCod "]}
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-pre-wrap">
            {props.user.HISCKEY }
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-pre-wrap">
            {props.user.MPNOMC }
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-pre-wrap">
            {props.user.HCFcHrOrd }
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-pre-wrap">
            {props.user["PrNomb "] }
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-pre-wrap">
            <div className="">
                    <button
                      onClick={modificar}
                      type="button"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Modificar
                    </button>
            </div>
          </td>
        </tr><tr className="bg-white border-b p-5"></tr>
        
        {/*{cirugiaPaciente? 
       <div>
        <Cirugia userDate={props.user}/>
        <div className="p-10">
                                <button
                                  onClick={modificar}
                                  type="button"
                                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                  Cancelar
                                </button>
                        </div>
      </div>: <div></div>} */}
      {/* {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} user={props.user}/>} */}
      {modalOn && < ModalCirugia setModalOn={setModalOn} setChoice={setChoice} user={props.user}/>} 
      </>
  )
}

export default TablaProgramacionCirugia