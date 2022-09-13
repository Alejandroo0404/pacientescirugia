import React, { useEffect, useState } from "react";
import Api from "../components/Api";
import Seconds from "../components/Seconds";
import './PacientesCirugias.css';

const PacientesCirugias = () => {
  const [statesUsers, setStatesUsers] = useState([]);
  const [seconds, setSeconds] = useState()
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      let time = new Date();
      let secondsTime = time.getSeconds();
      let timerSeconds =`${time.getSeconds()}`
      if(timerSeconds.length === 1){
        timerSeconds = "0" + timerSeconds
      }
      let hoursTime = `${time.getHours()}`
      if(hoursTime.length === 1 ){
        hoursTime = "0" + hoursTime
      }
      let minutesTime = `${time.getMinutes()}`
      if(minutesTime.length === 1){
        minutesTime = "0" + minutesTime
      }
      let hoursMinutes = `${hoursTime}:${minutesTime}`
      setCurrentTime(hoursMinutes)
      //console.log(secondsTime);
      setSeconds(timerSeconds)
      ///Cada vez que el tiempo empiece en cero, es decir que pase un minuto, hace llamada a la api
      if (secondsTime === 0) {
        const subtractTimeUser = Api.map((users) => {
          let nameUser = users.nombre_paciente;
          let ingresoSalaUser = "vacio";
          let preparadoUser = "vacio";
          let cirugiaUser = "vacio";
          let recuperacionUser = "vacio";
          let colocarCronometro = "";
          let timer = "";
          //restar los tiempos
          if (users.preparado) {
            const ingresoSala = users.ingreso_sala.split(":");
            const preparado = users.preparado.split(":");
            const pasarHorasAMinutosIngresoSala =
              ingresoSala[0] * 60 + parseInt(ingresoSala[1]);
            const pasarHorasAMinutosPreparado =
              preparado[0] * 60 + parseInt(preparado[1]);
            const restaMinutosIngresoSalaConPreparado =
              pasarHorasAMinutosIngresoSala - pasarHorasAMinutosPreparado;
            const tiempo =
              "" + Math.abs(restaMinutosIngresoSalaConPreparado * (1 / 60));
            const tiempoArray = tiempo.split(".");
            const totalHora = parseInt(tiempoArray[0]);
            let totalHoraString = "" + totalHora;
            if (totalHoraString.length === 1) {
              totalHoraString = "0" + totalHoraString;
            }
            const tiempoMinutos = "0." + tiempoArray[1];
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed()
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }
            ingresoSalaUser = `${totalHoraString}:${totalMinutos}`;
          }
          if (users.cirugia) {
            const preparado = users.preparado.split(":");
            const cirugia = users.cirugia.split(":");
            const pasarHorasAMinutosPreparado =
              preparado[0] * 60 + parseInt(preparado[1]);
            const pasarHorasAMinutosCirugia =
              cirugia[0] * 60 + parseInt(cirugia[1]);
            const restaMinutosPrepadoConCirugia =
              pasarHorasAMinutosPreparado - pasarHorasAMinutosCirugia;
            const tiempo =
              "" + Math.abs(restaMinutosPrepadoConCirugia * (1 / 60));
            const tiempoArray = tiempo.split(".");
            const totalHora = parseInt(tiempoArray[0]);
            let totalHoraString = "" + totalHora;
            if (totalHoraString.length === 1) {
              totalHoraString = "0" + totalHoraString;
            }
            const tiempoMinutos = "0." + tiempoArray[1];
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed()
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }
            preparadoUser = `${totalHoraString}:${totalMinutos}`;
          }
          if (users.recuperacion) {
            const cirugia = users.cirugia.split(":");
            const recuperacion = users.recuperacion.split(":");
            const pasarHorasAMinutosCirugia =
              cirugia[0] * 60 + parseInt(cirugia[1]);
            const pasarHorasAMinutosRecuperacion =
              recuperacion[0] * 60 + parseInt(recuperacion[1]);
            const restaMinutosCirugiaConRecuperacion =
              pasarHorasAMinutosCirugia - pasarHorasAMinutosRecuperacion;
            const tiempo =
              "" + Math.abs(restaMinutosCirugiaConRecuperacion * (1 / 60));
            const tiempoArray = tiempo.split(".");
            const totalHora = parseInt(tiempoArray[0]);
            let totalHoraString = "" + totalHora;
            if (totalHoraString.length === 1) {
              totalHoraString = "0" + totalHoraString;
            }
            const tiempoMinutos = "0." + tiempoArray[1];
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed()
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }
            cirugiaUser = `${totalHoraString}:${totalMinutos}`;
          }

          if (users.salida) {
            const recuperacion = users.recuperacion.split(":");
            const salida = users.salida.split(":");
            const pasarHorasAMinutosRecuperacion =
              recuperacion[0] * 60 + parseInt(recuperacion[1]);
            const pasarHorasAMinutosSalida =
              salida[0] * 60 + parseInt(salida[1]);
            const restaMinutosRecuperacionConSalida =
              pasarHorasAMinutosRecuperacion - pasarHorasAMinutosSalida;
            const tiempo =
              "" + Math.abs(restaMinutosRecuperacionConSalida * (1 / 60));
            const tiempoArray = tiempo.split(".");
            const totalHora = parseInt(tiempoArray[0]);
            let totalHoraString = "" + totalHora;
            if (totalHoraString.length === 1) {
              totalHoraString = "0" + totalHoraString;
            }
            const tiempoMinutos = "0." + tiempoArray[1];
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed()
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }
            recuperacionUser = `${totalHoraString}:${totalMinutos}`;
          }
          //timer por cada paciente en cirugia
          if(ingresoSalaUser === 'vacio'){
            colocarCronometro = 'ingreso a sala'
            let horaMinutos = new Date();
          
            let horaActualEnMinutos = (horaMinutos.getHours() * 60) + horaMinutos.getMinutes()
            
            ////
            const ingresoSala = (users.ingreso_sala).split(':')
            const pasarHorasAMinutosIngresoSala = (ingresoSala[0] * 60) + parseInt(ingresoSala[1])
            const restaHoraActualConIngresoSala = horaActualEnMinutos - pasarHorasAMinutosIngresoSala
            
            const tiempo = "" + Math.abs(restaHoraActualConIngresoSala * (1/60))
            //console.log(tiempo, "tiempo")
            const tiempoArray = tiempo.split('.')
            //console.log(tiempoArray, "array del tiempo")
            const totalHora = parseInt(tiempoArray[0])
            //console.log(totalHora, "array del tiempo")
            let totalHoraString = "" + totalHora
            if(totalHoraString.length === 1){
                totalHoraString = "0" + totalHoraString
            }                 
            const tiempoMinutos = "0." + tiempoArray[1] 
            //let totalMinutos = "" + parseInt(parseFloat(tiempoMinutos) * 60)
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed()
            console.log(parseFloat(tiempoMinutos)*60, "PARSE FLOAT")
            console.log(totalMinutos, "TO FIXED")
            if(totalMinutos.length === 1){
                totalMinutos = "0" + totalMinutos
            }  
            // let horaActual = time.getHours()
            // let minuteActual = time.getMinutes()
            // let ingresoSalaTime = ''
            // if(users.ingreso_sala){
            //     ingresoSalaTime = users.ingreso_sala.split(":");
            // }
            //console.log(ingresoSalaTime, 'ingresoSalaTime')
            // const pasarMinutosActual = (horaActual * 60) + minuteActual
            // const pasarMinutos = (parseInt(ingresoSalaTime[0]) * 60) + parseInt(ingresoSalaTime[1])
            // const restMinutosActualConMinutos = pasarMinutosActual - pasarMinutos
            // const pasarAHoras = restMinutosActualConMinutos / 60
            // const arrayTime = pasarAHoras.split('.')
            // const totalHora = ""+arrayTime[0]
            // if(totalHora.length === 1){
            //     totalHora = "0" + totalHora
            // }
            // const totalMinutos = '0.'+arrayTime[1]
            // const calcularTotalMinutos = ""+ parseInt(parseFloat(totalMinutos) * 60)
            // if(calcularTotalMinutos.length === 1){
            //     calcularTotalMinutos = "0" + calcularTotalMinutos
            // }
            //const restHoraIngresoSalaConHoraActual = horaActual - parseInt(ingresoSalaTime[0])
            //const pasarHorasAMinutos = restHoraIngresoSalaConHoraActual * 60
            //const restMinutesIngresoSalaConHoraActual = minuteActual - parseInt(ingresoSalaTime[1])
            //const sumarMinutos = pasarHorasAMinutos + restMinutesIngresoSalaConHoraActual

            // let timehour = "" + restHoraIngresoSalaConHoraActual
            // let timeMinute = "" + restMinutesIngresoSalaConHoraActual
            // if(timehour.length === 1){
            //     timehour = "0" + timehour
            // }
            // if(timeMinute.length === 1){
            //     timeMinute = "0" + timeMinute
            // }
            timer = `${totalHoraString}:${totalMinutos}`
          }else if(preparadoUser === 'vacio'){
            colocarCronometro = 'preparacion'
            let horaMinutos = new Date();
          
            let horaActualEnMinutos = (horaMinutos.getHours() * 60) + horaMinutos.getMinutes()
            
            ////
            const ingresoPreparado = (users.preparado).split(':')
            const pasarHorasAMinutosPreparado = (ingresoPreparado[0] * 60) + parseInt(ingresoPreparado[1])
            const restaHoraActualConPreparado = horaActualEnMinutos - pasarHorasAMinutosPreparado
            
            const tiempo = "" + Math.abs(restaHoraActualConPreparado * (1/60))
            const tiempoArray = tiempo.split('.')
            const totalHora = parseInt(tiempoArray[0])
            let totalHoraString = "" + totalHora
            if(totalHoraString.length === 1){
                totalHoraString = "0" + totalHoraString
            }                 
            const tiempoMinutos = "0." + tiempoArray[1] 
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed()
            if(totalMinutos.length === 1){
                totalMinutos = "0" + totalMinutos
            }  
            // let horaActual = time.getHours()
            // let minuteActual = time.getMinutes()
            // let preparadoTime = ''
            // if(users.preparado){
            //     preparadoTime = users.preparado.split(":");
            // }
            // const restHoraMinutesPreparacionConHoraActual = horaActual - parseInt(preparadoTime[0])
            // const restMinutesPreparacionConHoraActual = minuteActual - parseInt(preparadoTime[1])
            // let timehour = "" + restHoraMinutesPreparacionConHoraActual
            // let timeMinute = "" + restMinutesPreparacionConHoraActual
            // if(timehour.length === 1){
            //     timehour = "0" + timehour
            // }
            // if(timeMinute.length === 1){
            //     timeMinute = "0" + timeMinute
            // }
            timer = `${totalHoraString}:${totalMinutos}`
          }else if(cirugiaUser === 'vacio'){
            colocarCronometro = 'cirugia'
            let horaMinutos = new Date();
          
            let horaActualEnMinutos = (horaMinutos.getHours() * 60) + horaMinutos.getMinutes()
            
            ////
            const ingresoCirugia = (users.cirugia).split(':')
            const pasarHorasAMinutosCirugia = (ingresoCirugia[0] * 60) + parseInt(ingresoCirugia[1])
            const restaHoraActualConCirugia = horaActualEnMinutos - pasarHorasAMinutosCirugia
            
            const tiempo = "" + Math.abs(restaHoraActualConCirugia * (1/60))
            const tiempoArray = tiempo.split('.')
            const totalHora = parseInt(tiempoArray[0])
            let totalHoraString = "" + totalHora
            if(totalHoraString.length === 1){
                totalHoraString = "0" + totalHoraString
            }                 
            const tiempoMinutos = "0." + tiempoArray[1] 
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed()
            if(totalMinutos.length === 1){
                totalMinutos = "0" + totalMinutos
            }  
            // let horaActual = time.getHours()
            // let minuteActual = time.getMinutes()
            // let cirugiaTime = ''
            // if(users.cirugia){
            //     cirugiaTime = users.cirugia.split(":");
            // }
            // const restHoraCirugiaConHoraActual = horaActual - parseInt(cirugiaTime[0])
            // const restMinutesCirugiaConHoraActual = minuteActual - parseInt(cirugiaTime[1])
            // let timehour = "" + restHoraCirugiaConHoraActual
            // let timeMinute = "" + restMinutesCirugiaConHoraActual
            // if(timehour.length === 1){
            //     timehour = "0" + timehour
            // }
            // if(timeMinute.length === 1){
            //     timeMinute = "0" + timeMinute
            // }
            timer = `${totalHoraString}:${totalMinutos}` 
          }else if(recuperacionUser === 'vacio'){
            colocarCronometro = 'recuperacion'
            let horaMinutos = new Date();
          
            let horaActualEnMinutos = (horaMinutos.getHours() * 60) + horaMinutos.getMinutes()
            
            ////
            const ingresoRecuperacion = (users.recuperacion).split(':')
            const pasarHorasAMinutosRecuperacion = (ingresoRecuperacion[0] * 60) + parseInt(ingresoRecuperacion[1])
            const restaHoraActualConRecuperacion = horaActualEnMinutos - pasarHorasAMinutosRecuperacion
            
            const tiempo = "" + Math.abs(restaHoraActualConRecuperacion * (1/60))
            const tiempoArray = tiempo.split('.')
            const totalHora = parseInt(tiempoArray[0])
            let totalHoraString = "" + totalHora
            if(totalHoraString.length === 1){
                totalHoraString = "0" + totalHoraString
            }                 
            const tiempoMinutos = "0." + tiempoArray[1] 
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed()
            if(totalMinutos.length === 1){
                totalMinutos = "0" + totalMinutos
            }  
            // let horaActual = time.getHours()
            // let minuteActual = time.getMinutes()
            // let recuperacionTime = ''
            // if(users.recuperacion){
            //     recuperacionTime = users.recuperacion.split(":");
            // }
            // const restHoraRecuperacionConHoraActual = horaActual - parseInt(recuperacionTime[0])
            // const restMinutesRecuperacionConHoraActual = minuteActual - parseInt(recuperacionTime[1])
            // let timehour = "" + restHoraRecuperacionConHoraActual
            // let timeMinute = "" + restMinutesRecuperacionConHoraActual
            // if(timehour.length === 1){
            //     timehour = "0" + timehour
            // }
            // if(timeMinute.length === 1){
            //     timeMinute = "0" + timeMinute
            // }
            timer = `${totalHoraString}:${totalMinutos}`
          }
          return {
            nameUser: nameUser,
            ingresoSalaUser: ingresoSalaUser,
            preparadoUser: preparadoUser,
            cirugiaUser: cirugiaUser,
            recuperacionUser: recuperacionUser,
            colocarCronometro: colocarCronometro,
            timer: timer
          };
        });
        setStatesUsers(subtractTimeUser);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex  justify-center min-h-screen bg-[#00a09b] w-full h-full">
      <div className="col-span-12">
        <div className="overflow-auto lg:overflow-visible">
          <div className="flex  border-b-2 border-fuchsia-900 pb-1 justify-between">
            <h2 className=" text-[#666666] font-medium 2xl:text-6xl xl:text-6xl lg:text-3xl md:text-3xl sm:text-3xl">
              Pacientes en cirugía
            </h2>
            <h2 className=" text-[#666666] font-medium 2xl:text-6xl xl:text-6xl lg:text-3xl md:text-3xl sm:text-3xl">{currentTime}</h2>
          </div>

          <table className="table text-gray-400 border-separate space-y-6 2xl:text-3xl xl:text-xl lg:text-xl md:text-base sm:text-sm">
            <thead className="bg-[#01918c] text-white">
              <tr>
                <th className="p-3">Pacientes</th>
                <th className="p-3 text-left">Ingreso sala</th>
                <th className="p-3 text-left">Preparación</th>
                <th className="p-3 text-left">Cirugía</th>

                <th className="p-3 text-left">Recuperación</th>
                <th className="p-3 text-left">Salida/traslado</th>
              </tr>
            </thead>
            <tbody>
            {/* {subtractTime.length} */}
            {statesUsers.map((item, index)=>(
              <tr className="bg-white lg:text-black" key={index}>
                <td className="p-3 font-medium capitalize">
                  {item.nameUser}
                </td>
                {(item.ingresoSalaUser === 'vacio')? 
                ((item.colocarCronometro === 'ingreso a sala')? 
                <td className="p-3 font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-base sm:text-sm">{item.timer}:{seconds}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 inline-block px-1"
                    viewBox="0 0 26 26"                    
                  >
                    <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 11.9375 2.75 C 12.007813 2.742188 12.085938 2.753906 12.15625 2.75 C 11.972656 2.957031 11.875 3.222656 11.875 3.5 L 11.875 4 C 11.875 4.621094 12.378906 5.125 13 5.125 C 13.621094 5.125 14.125 4.621094 14.125 4 L 14.125 3.5 C 14.125 3.222656 14.027344 2.957031 13.84375 2.75 C 18.863281 3.15625 22.84375 7.136719 23.25 12.15625 C 23.042969 11.972656 22.777344 11.875 22.5 11.875 L 22 11.875 C 21.957031 11.871094 21.917969 11.871094 21.875 11.875 C 21.253906 11.910156 20.777344 12.441406 20.8125 13.0625 C 20.847656 13.683594 21.378906 14.160156 22 14.125 L 22.5 14.125 C 22.777344 14.125 23.042969 14.027344 23.25 13.84375 C 22.84375 18.863281 18.863281 22.84375 13.84375 23.25 C 14.027344 23.042969 14.125 22.777344 14.125 22.5 L 14.125 22 C 14.132813 21.652344 13.984375 21.320313 13.714844 21.101563 C 13.445313 20.878906 13.089844 20.796875 12.75 20.875 C 12.226563 20.992188 11.859375 21.464844 11.875 22 L 11.875 22.5 C 11.875 22.777344 11.972656 23.042969 12.15625 23.25 C 7.148438 22.84375 3.167969 18.878906 2.75 13.875 C 2.960938 14.046875 3.226563 14.136719 3.5 14.125 L 4 14.125 C 4.621094 14.125 5.125 13.621094 5.125 13 C 5.125 12.378906 4.621094 11.875 4 11.875 L 3.5 11.875 C 3.457031 11.871094 3.417969 11.871094 3.375 11.875 C 3.148438 11.882813 2.933594 11.960938 2.75 12.09375 C 3.175781 7.175781 7.039063 3.25 11.9375 2.75 Z M 13 6.0625 C 12.546875 6.0625 12.359375 6.457031 12.34375 6.6875 L 12.09375 11.71875 C 11.695313 12.003906 11.4375 12.472656 11.4375 13 C 11.4375 13.867188 12.132813 14.5625 13 14.5625 C 13.054688 14.5625 13.101563 14.535156 13.15625 14.53125 L 16.21875 17.25 C 16.390625 17.402344 16.824219 17.519531 17.1875 17.15625 C 17.550781 16.792969 17.429688 16.363281 17.28125 16.1875 L 14.5625 13.0625 C 14.5625 13.042969 14.5625 13.019531 14.5625 13 C 14.5625 12.445313 14.277344 11.96875 13.84375 11.6875 L 13.65625 6.6875 C 13.644531 6.457031 13.449219 6.0625 13 6.0625 Z" />
                  </svg>
                  </td> : <td className="p-3 font-medium"></td> ) 
                : <td className="p-3 font-medium">{item.ingresoSalaUser}</td>}


                {(item.preparadoUser === 'vacio')? 
                ((item.colocarCronometro === 'preparacion')? 
                <td className="p-3 font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-base sm:text-sm">{item.timer}:{seconds}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 inline-block px-1"
                    viewBox="0 0 26 26"                    
                  >
                    <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 11.9375 2.75 C 12.007813 2.742188 12.085938 2.753906 12.15625 2.75 C 11.972656 2.957031 11.875 3.222656 11.875 3.5 L 11.875 4 C 11.875 4.621094 12.378906 5.125 13 5.125 C 13.621094 5.125 14.125 4.621094 14.125 4 L 14.125 3.5 C 14.125 3.222656 14.027344 2.957031 13.84375 2.75 C 18.863281 3.15625 22.84375 7.136719 23.25 12.15625 C 23.042969 11.972656 22.777344 11.875 22.5 11.875 L 22 11.875 C 21.957031 11.871094 21.917969 11.871094 21.875 11.875 C 21.253906 11.910156 20.777344 12.441406 20.8125 13.0625 C 20.847656 13.683594 21.378906 14.160156 22 14.125 L 22.5 14.125 C 22.777344 14.125 23.042969 14.027344 23.25 13.84375 C 22.84375 18.863281 18.863281 22.84375 13.84375 23.25 C 14.027344 23.042969 14.125 22.777344 14.125 22.5 L 14.125 22 C 14.132813 21.652344 13.984375 21.320313 13.714844 21.101563 C 13.445313 20.878906 13.089844 20.796875 12.75 20.875 C 12.226563 20.992188 11.859375 21.464844 11.875 22 L 11.875 22.5 C 11.875 22.777344 11.972656 23.042969 12.15625 23.25 C 7.148438 22.84375 3.167969 18.878906 2.75 13.875 C 2.960938 14.046875 3.226563 14.136719 3.5 14.125 L 4 14.125 C 4.621094 14.125 5.125 13.621094 5.125 13 C 5.125 12.378906 4.621094 11.875 4 11.875 L 3.5 11.875 C 3.457031 11.871094 3.417969 11.871094 3.375 11.875 C 3.148438 11.882813 2.933594 11.960938 2.75 12.09375 C 3.175781 7.175781 7.039063 3.25 11.9375 2.75 Z M 13 6.0625 C 12.546875 6.0625 12.359375 6.457031 12.34375 6.6875 L 12.09375 11.71875 C 11.695313 12.003906 11.4375 12.472656 11.4375 13 C 11.4375 13.867188 12.132813 14.5625 13 14.5625 C 13.054688 14.5625 13.101563 14.535156 13.15625 14.53125 L 16.21875 17.25 C 16.390625 17.402344 16.824219 17.519531 17.1875 17.15625 C 17.550781 16.792969 17.429688 16.363281 17.28125 16.1875 L 14.5625 13.0625 C 14.5625 13.042969 14.5625 13.019531 14.5625 13 C 14.5625 12.445313 14.277344 11.96875 13.84375 11.6875 L 13.65625 6.6875 C 13.644531 6.457031 13.449219 6.0625 13 6.0625 Z" />
                  </svg>
                  </td> : <td className="p-3 font-medium"></td>)
                : <td className="p-3 font-medium">{item.preparadoUser}</td>}


                {(item.cirugiaUser === 'vacio')? 
                ((item.colocarCronometro === 'cirugia')? 
                <td className="p-3 font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-base sm:text-sm">{item.timer}:{seconds}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 inline-block px-1"
                    viewBox="0 0 26 26"                    
                  >
                    <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 11.9375 2.75 C 12.007813 2.742188 12.085938 2.753906 12.15625 2.75 C 11.972656 2.957031 11.875 3.222656 11.875 3.5 L 11.875 4 C 11.875 4.621094 12.378906 5.125 13 5.125 C 13.621094 5.125 14.125 4.621094 14.125 4 L 14.125 3.5 C 14.125 3.222656 14.027344 2.957031 13.84375 2.75 C 18.863281 3.15625 22.84375 7.136719 23.25 12.15625 C 23.042969 11.972656 22.777344 11.875 22.5 11.875 L 22 11.875 C 21.957031 11.871094 21.917969 11.871094 21.875 11.875 C 21.253906 11.910156 20.777344 12.441406 20.8125 13.0625 C 20.847656 13.683594 21.378906 14.160156 22 14.125 L 22.5 14.125 C 22.777344 14.125 23.042969 14.027344 23.25 13.84375 C 22.84375 18.863281 18.863281 22.84375 13.84375 23.25 C 14.027344 23.042969 14.125 22.777344 14.125 22.5 L 14.125 22 C 14.132813 21.652344 13.984375 21.320313 13.714844 21.101563 C 13.445313 20.878906 13.089844 20.796875 12.75 20.875 C 12.226563 20.992188 11.859375 21.464844 11.875 22 L 11.875 22.5 C 11.875 22.777344 11.972656 23.042969 12.15625 23.25 C 7.148438 22.84375 3.167969 18.878906 2.75 13.875 C 2.960938 14.046875 3.226563 14.136719 3.5 14.125 L 4 14.125 C 4.621094 14.125 5.125 13.621094 5.125 13 C 5.125 12.378906 4.621094 11.875 4 11.875 L 3.5 11.875 C 3.457031 11.871094 3.417969 11.871094 3.375 11.875 C 3.148438 11.882813 2.933594 11.960938 2.75 12.09375 C 3.175781 7.175781 7.039063 3.25 11.9375 2.75 Z M 13 6.0625 C 12.546875 6.0625 12.359375 6.457031 12.34375 6.6875 L 12.09375 11.71875 C 11.695313 12.003906 11.4375 12.472656 11.4375 13 C 11.4375 13.867188 12.132813 14.5625 13 14.5625 C 13.054688 14.5625 13.101563 14.535156 13.15625 14.53125 L 16.21875 17.25 C 16.390625 17.402344 16.824219 17.519531 17.1875 17.15625 C 17.550781 16.792969 17.429688 16.363281 17.28125 16.1875 L 14.5625 13.0625 C 14.5625 13.042969 14.5625 13.019531 14.5625 13 C 14.5625 12.445313 14.277344 11.96875 13.84375 11.6875 L 13.65625 6.6875 C 13.644531 6.457031 13.449219 6.0625 13 6.0625 Z" />
                  </svg>
                  </td> : <td className="p-3 font-medium"></td>)
                 : <td className="p-3 font-medium">{item.cirugiaUser}</td>}


                {(item.recuperacionUser === 'vacio')? 
                ((item.colocarCronometro === 'recuperacion')?
                <td className="p-3 font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-base sm:text-sm">{item.timer}:{seconds}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 inline-block px-1"
                    viewBox="0 0 26 26"                    
                  >
                    <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 11.9375 2.75 C 12.007813 2.742188 12.085938 2.753906 12.15625 2.75 C 11.972656 2.957031 11.875 3.222656 11.875 3.5 L 11.875 4 C 11.875 4.621094 12.378906 5.125 13 5.125 C 13.621094 5.125 14.125 4.621094 14.125 4 L 14.125 3.5 C 14.125 3.222656 14.027344 2.957031 13.84375 2.75 C 18.863281 3.15625 22.84375 7.136719 23.25 12.15625 C 23.042969 11.972656 22.777344 11.875 22.5 11.875 L 22 11.875 C 21.957031 11.871094 21.917969 11.871094 21.875 11.875 C 21.253906 11.910156 20.777344 12.441406 20.8125 13.0625 C 20.847656 13.683594 21.378906 14.160156 22 14.125 L 22.5 14.125 C 22.777344 14.125 23.042969 14.027344 23.25 13.84375 C 22.84375 18.863281 18.863281 22.84375 13.84375 23.25 C 14.027344 23.042969 14.125 22.777344 14.125 22.5 L 14.125 22 C 14.132813 21.652344 13.984375 21.320313 13.714844 21.101563 C 13.445313 20.878906 13.089844 20.796875 12.75 20.875 C 12.226563 20.992188 11.859375 21.464844 11.875 22 L 11.875 22.5 C 11.875 22.777344 11.972656 23.042969 12.15625 23.25 C 7.148438 22.84375 3.167969 18.878906 2.75 13.875 C 2.960938 14.046875 3.226563 14.136719 3.5 14.125 L 4 14.125 C 4.621094 14.125 5.125 13.621094 5.125 13 C 5.125 12.378906 4.621094 11.875 4 11.875 L 3.5 11.875 C 3.457031 11.871094 3.417969 11.871094 3.375 11.875 C 3.148438 11.882813 2.933594 11.960938 2.75 12.09375 C 3.175781 7.175781 7.039063 3.25 11.9375 2.75 Z M 13 6.0625 C 12.546875 6.0625 12.359375 6.457031 12.34375 6.6875 L 12.09375 11.71875 C 11.695313 12.003906 11.4375 12.472656 11.4375 13 C 11.4375 13.867188 12.132813 14.5625 13 14.5625 C 13.054688 14.5625 13.101563 14.535156 13.15625 14.53125 L 16.21875 17.25 C 16.390625 17.402344 16.824219 17.519531 17.1875 17.15625 C 17.550781 16.792969 17.429688 16.363281 17.28125 16.1875 L 14.5625 13.0625 C 14.5625 13.042969 14.5625 13.019531 14.5625 13 C 14.5625 12.445313 14.277344 11.96875 13.84375 11.6875 L 13.65625 6.6875 C 13.644531 6.457031 13.449219 6.0625 13 6.0625 Z" />
                  </svg>
                  </td> : <td className="p-3 font-medium"></td>) 
                : <td className="p-3 font-medium">{item.recuperacionUser}</td>}
                
                <td className="p-3 font-medium"></td>
              </tr>
            ))}
              
              
            </tbody>            
          </table>
          {/* <div><Chronometer/></div> */}
          {/* <div>{seconds}</div> */}
        </div>
      </div>
    </div>
  );
};

export default PacientesCirugias;
