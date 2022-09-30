import axios from "axios";
import React, { useEffect, useState } from "react";

const StatesUser = (props) => {
  const [userStates, setUserStates] = useState();
  const [disabledPendiente, setDisabledPendiente] = useState(false);
  const [disabledReservado, setDisabledReservado] = useState(false);
  const [disabledConfirmado, setDisabledConfirmado] = useState(false);
  const [disabledIngresoSala, setDisabledIngresoSala] = useState(false);
  const [disabledPreparado, setDisabledPreparado] = useState(false);
  const [disabledCirugia, setDisabledCirugia] = useState(false);
  const [disabledRecuperacion, setDisabledRecuperacion] = useState(false);
  const [disabledSalida, setDisabledSalida] = useState(false);
  
  const handleState = async (e) => {
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
    //fecha_cambio_estado: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`,
    const body = {
      id_cirugia: props.users.id_cirugia,
      cedula_paciente: props.users.cedula_paciente,
      nombre_cirujano: props.users.nombre_cirujano,
      nombre_paciente: props.users.nombre_paciente,
      estado_paciente: e.target.value,
      fecha_cambio_estado: `${fecha.getFullYear()}-${mes}-${dia}`,
      hora_cambio_estado: `${fecha.getHours()}:${fecha.getMinutes()}`,
    };

    await axios.post("http://127.0.0.1:8000/api/movimientocirugia", body);
    
    if ("pendiente" === userStates) {
      setUserStates("reservado")
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(false)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)
    } else if ("reservado" === userStates) {
      setUserStates("confirmado")
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(false)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)
    } else if ("confirmado" === userStates) {
      setUserStates("ingreso a sala")
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(false)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)
    } else if ("ingreso a sala" === userStates) {
      setUserStates("preparado")
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(false)
      setDisabledRecuperacion(true)
      setDisabledSalida(true) 
    } else if ("preparado" === userStates) {
      setUserStates("cirugia")
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(false) 
      setDisabledSalida(true)  
    } else if ("cirugia" === userStates) {
      setUserStates("recuperacion")
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(false)
    }else if ("recuperacion" === userStates) {
      setUserStates("salida")
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)   
    }
  };

  useEffect(() => {    
    setUserStates(props.users.estado_paciente)

    if(props.users.estado_paciente === "pendiente"){
      setDisabledPendiente(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)
    }else if(props.users.estado_paciente === "reservado"){
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)
    }else if(props.users.estado_paciente === "confirmado"){
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)
    }else if(props.users.estado_paciente === "ingreso a sala"){
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)
    }else if(props.users.estado_paciente === "preparado"){
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)
    }else if(props.users.estado_paciente === "cirugia"){
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledSalida(true)
    }else if(props.users.estado_paciente === "recuperacion"){
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
    }else if(props.users.estado_paciente === "salida"){
      setDisabledPendiente(true)
      setDisabledReservado(true)
      setDisabledConfirmado(true)
      setDisabledIngresoSala(true)
      setDisabledPreparado(true)
      setDisabledCirugia(true)
      setDisabledRecuperacion(true)
      setDisabledSalida(true)
    }
  }, []);

  return (
    <>
      {props.users.nombre_paciente ? (
        <div>
          <select onChange={handleState} value={userStates}>
            <option value="pendiente"         disabled={disabledPendiente}>pendiente</option>
            <option value="reservado"         disabled={disabledReservado}>reservado</option>
            <option value="confirmado"        disabled={disabledConfirmado}>confirmado</option>
            <option value="ingreso a sala"    disabled={disabledIngresoSala}>ingreso a sala</option>
            <option value="preparado"         disabled={disabledPreparado}>preparado</option>
            <option value="cirugia"           disabled={disabledCirugia}>cirugia</option>
            <option value="recuperacion"      disabled={disabledRecuperacion}>recuperacion</option>
            <option value="salida"            disabled={disabledSalida}>salida</option>
          </select>
          
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default StatesUser;
