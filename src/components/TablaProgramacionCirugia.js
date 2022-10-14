import axios from 'axios';
import React, { useState } from 'react'

const TablaProgramacionCirugia = () => {
    const [userDate, setUserDate] = useState([])
    const [cirugiaP, setCirugiaP] = useState(true)

    const cirugiaPaciente = ()=>{
        if(cirugiaP){
          setCirugiaP(false)
        }else if(!cirugiaP){
          setCirugiaP(true)
        }
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
          Id_cirugia: userDate[0].ProCirCod,
          cedula_paciente: userDate[0].HISCKEY,
          nombre_cirujano: userDate[0].MPNOMC,
          nombre_paciente: userDate[0].MPNOMC,
          estado_paciente: e.target.value,
          fecha_cambio_estado: `${fecha.getFullYear()}-${mes}-${dia}`,
          hora_cambio_estado: `${fecha.getHours()}:${fecha.getMinutes()}`,
        };
        await axios.post("http://127.0.0.1:8000/api/cambioes", body); 
      }
  return (
    
        <tbody>
         
        <tr className="bg-white border-b">
          <td>
            <div className="pt-2">
              <div className="mb-3 xl:w-96">
                <select onChange={handleState} className="form-select 
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-medium
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
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
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
            {/* {userDate[0].ProCirCod} */}
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
            {/* {userDate[0].HISCKEY } */}
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
            {/* {userDate[0].MPNOMC } */}
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
            {/* {userDate[0].HCFcHrOrd } */}
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
            {/* {userDate[0]["PrNomb "] } */}
          </td>
          <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
            <div className="">
                    <button
                      onClick={cirugiaPaciente}
                      type="button"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Modificar
                    </button>
            </div>
          </td>
        </tr><tr className="bg-white border-b p-5"></tr>
      
      </tbody>
  )
}

export default TablaProgramacionCirugia