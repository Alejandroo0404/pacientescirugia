import axios from "axios";
import React, { useEffect, useState } from "react";
import Api from "../components/Api";
import "./PacientesCirugias.css";

const PacientesCirugias = () => {
  const [statesUsers, setStatesUsers] = useState([]);
  const [seconds, setSeconds] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [loading, setLoading] = useState(true);
  //const [dataUsersStates, setDataUsersStates] = useState([]);
  let nuevo;
  let apiUsers = async () =>{
    axios.get("http://192.241.142.26:81/api/pacientescirugiafecha").then((response)=>{        
        

        nuevo = response.data
        
        
      })
  }
  useEffect(() => { 
    apiUsers()
    const interval = setInterval(() => {
      //apiUsers()
      let time = new Date();
      let secondsTime = time.getSeconds();
      let timerSeconds = `${time.getSeconds()}`;
      if (timerSeconds.length === 1) {
        timerSeconds = "0" + timerSeconds;
      }
      let hoursTime = `${time.getHours()}`;
      if (hoursTime.length === 1) {
        hoursTime = "0" + hoursTime;
      }
      let minutesTime = `${time.getMinutes()}`;
      if (minutesTime.length === 1) {
        minutesTime = "0" + minutesTime;
      }
      let hoursMinutes = `${hoursTime}:${minutesTime}`;
      setCurrentTime(hoursMinutes);      
      setSeconds(timerSeconds);
      ///Cada vez que el tiempo empiece en cero, es decir que pase un minuto, hace llamada a la api
      if(secondsTime === 20 || secondsTime === 50 || secondsTime === 0 || secondsTime === 55 || secondsTime === 57 || secondsTime === 59 || secondsTime === 58 ){
        apiUsers()
        
      }
      if (secondsTime === 0) {
        
        setLoading(false);
        const subtractTimeUser = nuevo.map((users) => {
          
          let nameUser;
          if(users['ingreso a sala']){
            nameUser = users.nombre_paciente;
          }
          //console.log(nameUser)
          let ingresoSalaUser = "vacio";
          let preparadoUser = "vacio";
          let cirugiaUser = "vacio";
          let recuperacionUser = "vacio";
          let colocarCronometro = "";
          let timer = "";
          //restar los tiempos
          //console.log(users['ingreso a sala'], "holaaaaaaaa")
          if (users.preparado && users['ingreso a sala']) {
            //console.log(users.ingreso_sala,"users.ingreso_sala")
            //const ingresoSala = users.ingreso_sala.split(":");
            const ingresoSala = users['ingreso a sala'].split(":");
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
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed();
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }
            ingresoSalaUser = `${totalHoraString}:${totalMinutos}`;
          }
          if (users.cirugia && users.preparado) {
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
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed();
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }
            preparadoUser = `${totalHoraString}:${totalMinutos}`;
          }
          if (users.recuperacion && users.cirugia) {
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
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed();
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }
            cirugiaUser = `${totalHoraString}:${totalMinutos}`;
          }

          if (users.salida && users.recuperacion) {
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
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed();
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }
            recuperacionUser = `${totalHoraString}:${totalMinutos}`;
          }
          //timer por cada paciente en cirugia
          //console.log(ingresoSalaUser,"ingresoSalaUser")
          if (ingresoSalaUser === "vacio" && users['ingreso a sala']) {
            colocarCronometro = "ingreso a sala";
            let horaMinutos = new Date();
            let horaActualEnMinutos =
              horaMinutos.getHours() * 60 + horaMinutos.getMinutes();

            ////
            //const ingresoSala = users.ingreso_sala.split(":");
            let ingresoSala = users['ingreso a sala'].split(":");
            // let ingresoSala;
            // if( users['ingreso a sala']){
            //   ingresoSala = users['ingreso a sala'].split(":");
            // }
            const pasarHorasAMinutosIngresoSala =
              ingresoSala[0] * 60 + parseInt(ingresoSala[1]);
            const restaHoraActualConIngresoSala =
              horaActualEnMinutos - pasarHorasAMinutosIngresoSala - 1;//CAMBIO -1

            const tiempo =
              "" + Math.abs(restaHoraActualConIngresoSala * (1 / 60));
            
            const tiempoArray = tiempo.split(".");
            
            const totalHora = parseInt(tiempoArray[0]);
            
            let totalHoraString = "" + totalHora;
            if (totalHoraString.length === 1) {
              totalHoraString = "0" + totalHoraString;
            }
            const tiempoMinutos = "0." + tiempoArray[1];
            
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed();
            //console.log(parseFloat(tiempoMinutos) * 60, "PARSE FLOAT");
            //console.log(totalMinutos, "TO FIXED");
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }

            timer = `${totalHoraString}:${totalMinutos}`;
          } else if (preparadoUser === "vacio" && users.preparado) {
            colocarCronometro = "preparacion";
            let horaMinutos = new Date();
            let horaActualEnMinutos =
              horaMinutos.getHours() * 60 + horaMinutos.getMinutes();

            ////
            const ingresoPreparado = users.preparado.split(":");
            const pasarHorasAMinutosPreparado =
              ingresoPreparado[0] * 60 + parseInt(ingresoPreparado[1]);
            const restaHoraActualConPreparado =
              horaActualEnMinutos - pasarHorasAMinutosPreparado - 1; //CAMBIO -1

            const tiempo =
              "" + Math.abs(restaHoraActualConPreparado * (1 / 60));
            const tiempoArray = tiempo.split(".");
            const totalHora = parseInt(tiempoArray[0]);
            let totalHoraString = "" + totalHora;
            if (totalHoraString.length === 1) {
              totalHoraString = "0" + totalHoraString;
            }
            const tiempoMinutos = "0." + tiempoArray[1];
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed();
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }

            timer = `${totalHoraString}:${totalMinutos}`;
          } else if (cirugiaUser === "vacio" && users.cirugia) {
            colocarCronometro = "cirugia";
            let horaMinutos = new Date();
            let horaActualEnMinutos =
              horaMinutos.getHours() * 60 + horaMinutos.getMinutes();

            ////
            const ingresoCirugia = users.cirugia.split(":");
            const pasarHorasAMinutosCirugia =
              ingresoCirugia[0] * 60 + parseInt(ingresoCirugia[1]);
            const restaHoraActualConCirugia =
              horaActualEnMinutos - pasarHorasAMinutosCirugia - 1;//CAMBIO -1

            const tiempo = "" + Math.abs(restaHoraActualConCirugia * (1 / 60));
            const tiempoArray = tiempo.split(".");
            const totalHora = parseInt(tiempoArray[0]);
            let totalHoraString = "" + totalHora;
            if (totalHoraString.length === 1) {
              totalHoraString = "0" + totalHoraString;
            }
            const tiempoMinutos = "0." + tiempoArray[1];
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed();
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }

            timer = `${totalHoraString}:${totalMinutos}`;
          } else if (recuperacionUser === "vacio" && users.recuperacion) {
            colocarCronometro = "recuperacion";
            let horaMinutos = new Date();
            let horaActualEnMinutos =
              horaMinutos.getHours() * 60 + horaMinutos.getMinutes();

            ////
            const ingresoRecuperacion = users.recuperacion.split(":");
            const pasarHorasAMinutosRecuperacion =
              ingresoRecuperacion[0] * 60 + parseInt(ingresoRecuperacion[1]);
            const restaHoraActualConRecuperacion =
              horaActualEnMinutos - pasarHorasAMinutosRecuperacion - 1;//CAMBIO -1

            const tiempo =
              "" + Math.abs(restaHoraActualConRecuperacion * (1 / 60));
            const tiempoArray = tiempo.split(".");
            const totalHora = parseInt(tiempoArray[0]);
            let totalHoraString = "" + totalHora;
            if (totalHoraString.length === 1) {
              totalHoraString = "0" + totalHoraString;
            }
            const tiempoMinutos = "0." + tiempoArray[1];
            let totalMinutos = (parseFloat(tiempoMinutos) * 60).toFixed();
            if (totalMinutos.length === 1) {
              totalMinutos = "0" + totalMinutos;
            }

            timer = `${totalHoraString}:${totalMinutos}`;
          }
          return {
            nameUser: nameUser,
            ingresoSalaUser: ingresoSalaUser,
            preparadoUser: preparadoUser,
            cirugiaUser: cirugiaUser,
            recuperacionUser: recuperacionUser,
            colocarCronometro: colocarCronometro,
            timer: timer,
          };
        });
        //console.log(subtractTimeUser, "$$$$$$$$")
        let newUsers = subtractTimeUser.filter((items)=>{
          if(items.nameUser){
            return {
              cirugiaUser:items.cirugiaUser,
              colocarCronometro:items.colocarCronometro,
              ingresoSalaUser:items.ingresoSalaUser,
              nameUser:items.nameUser,
              preparadoUser: items.preparadoUser,
              recuperacionUser: items.recuperacionUser,
              timer: items.timer
            }
          }
        })
        setStatesUsers(newUsers);
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
            <h2 className=" text-[#666666] font-medium 2xl:text-6xl xl:text-6xl lg:text-3xl md:text-3xl sm:text-3xl">
              {currentTime}
            </h2>
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
              {loading ? (
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="text-right">
                      <div role="status">
                        <svg
                          className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                statesUsers.map((item, index) => (
                  <tr className="bg-white lg:text-black" key={index}>
                    <td className="p-3 font-medium capitalize">
                      {item.nameUser}
                    </td>
                    {item.ingresoSalaUser === "vacio" ? (
                      item.colocarCronometro === "ingreso a sala" ? (
                        <td className="p-3 font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-base sm:text-sm">
                          {item.timer}:{seconds}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-9 inline-block px-1"
                            viewBox="0 0 26 26"
                          >
                            <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 11.9375 2.75 C 12.007813 2.742188 12.085938 2.753906 12.15625 2.75 C 11.972656 2.957031 11.875 3.222656 11.875 3.5 L 11.875 4 C 11.875 4.621094 12.378906 5.125 13 5.125 C 13.621094 5.125 14.125 4.621094 14.125 4 L 14.125 3.5 C 14.125 3.222656 14.027344 2.957031 13.84375 2.75 C 18.863281 3.15625 22.84375 7.136719 23.25 12.15625 C 23.042969 11.972656 22.777344 11.875 22.5 11.875 L 22 11.875 C 21.957031 11.871094 21.917969 11.871094 21.875 11.875 C 21.253906 11.910156 20.777344 12.441406 20.8125 13.0625 C 20.847656 13.683594 21.378906 14.160156 22 14.125 L 22.5 14.125 C 22.777344 14.125 23.042969 14.027344 23.25 13.84375 C 22.84375 18.863281 18.863281 22.84375 13.84375 23.25 C 14.027344 23.042969 14.125 22.777344 14.125 22.5 L 14.125 22 C 14.132813 21.652344 13.984375 21.320313 13.714844 21.101563 C 13.445313 20.878906 13.089844 20.796875 12.75 20.875 C 12.226563 20.992188 11.859375 21.464844 11.875 22 L 11.875 22.5 C 11.875 22.777344 11.972656 23.042969 12.15625 23.25 C 7.148438 22.84375 3.167969 18.878906 2.75 13.875 C 2.960938 14.046875 3.226563 14.136719 3.5 14.125 L 4 14.125 C 4.621094 14.125 5.125 13.621094 5.125 13 C 5.125 12.378906 4.621094 11.875 4 11.875 L 3.5 11.875 C 3.457031 11.871094 3.417969 11.871094 3.375 11.875 C 3.148438 11.882813 2.933594 11.960938 2.75 12.09375 C 3.175781 7.175781 7.039063 3.25 11.9375 2.75 Z M 13 6.0625 C 12.546875 6.0625 12.359375 6.457031 12.34375 6.6875 L 12.09375 11.71875 C 11.695313 12.003906 11.4375 12.472656 11.4375 13 C 11.4375 13.867188 12.132813 14.5625 13 14.5625 C 13.054688 14.5625 13.101563 14.535156 13.15625 14.53125 L 16.21875 17.25 C 16.390625 17.402344 16.824219 17.519531 17.1875 17.15625 C 17.550781 16.792969 17.429688 16.363281 17.28125 16.1875 L 14.5625 13.0625 C 14.5625 13.042969 14.5625 13.019531 14.5625 13 C 14.5625 12.445313 14.277344 11.96875 13.84375 11.6875 L 13.65625 6.6875 C 13.644531 6.457031 13.449219 6.0625 13 6.0625 Z" />
                          </svg>
                        </td>
                      ) : (
                        <td className="p-3 font-medium"></td>
                      )
                    ) : (
                      <td className="p-3 font-medium">
                        {item.ingresoSalaUser}
                      </td>
                    )}

                    {item.preparadoUser === "vacio" ? (
                      item.colocarCronometro === "preparacion" ? (
                        <td className="p-3 font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-base sm:text-sm">
                          {item.timer}:{seconds}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-9 inline-block px-1"
                            viewBox="0 0 26 26"
                          >
                            <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 11.9375 2.75 C 12.007813 2.742188 12.085938 2.753906 12.15625 2.75 C 11.972656 2.957031 11.875 3.222656 11.875 3.5 L 11.875 4 C 11.875 4.621094 12.378906 5.125 13 5.125 C 13.621094 5.125 14.125 4.621094 14.125 4 L 14.125 3.5 C 14.125 3.222656 14.027344 2.957031 13.84375 2.75 C 18.863281 3.15625 22.84375 7.136719 23.25 12.15625 C 23.042969 11.972656 22.777344 11.875 22.5 11.875 L 22 11.875 C 21.957031 11.871094 21.917969 11.871094 21.875 11.875 C 21.253906 11.910156 20.777344 12.441406 20.8125 13.0625 C 20.847656 13.683594 21.378906 14.160156 22 14.125 L 22.5 14.125 C 22.777344 14.125 23.042969 14.027344 23.25 13.84375 C 22.84375 18.863281 18.863281 22.84375 13.84375 23.25 C 14.027344 23.042969 14.125 22.777344 14.125 22.5 L 14.125 22 C 14.132813 21.652344 13.984375 21.320313 13.714844 21.101563 C 13.445313 20.878906 13.089844 20.796875 12.75 20.875 C 12.226563 20.992188 11.859375 21.464844 11.875 22 L 11.875 22.5 C 11.875 22.777344 11.972656 23.042969 12.15625 23.25 C 7.148438 22.84375 3.167969 18.878906 2.75 13.875 C 2.960938 14.046875 3.226563 14.136719 3.5 14.125 L 4 14.125 C 4.621094 14.125 5.125 13.621094 5.125 13 C 5.125 12.378906 4.621094 11.875 4 11.875 L 3.5 11.875 C 3.457031 11.871094 3.417969 11.871094 3.375 11.875 C 3.148438 11.882813 2.933594 11.960938 2.75 12.09375 C 3.175781 7.175781 7.039063 3.25 11.9375 2.75 Z M 13 6.0625 C 12.546875 6.0625 12.359375 6.457031 12.34375 6.6875 L 12.09375 11.71875 C 11.695313 12.003906 11.4375 12.472656 11.4375 13 C 11.4375 13.867188 12.132813 14.5625 13 14.5625 C 13.054688 14.5625 13.101563 14.535156 13.15625 14.53125 L 16.21875 17.25 C 16.390625 17.402344 16.824219 17.519531 17.1875 17.15625 C 17.550781 16.792969 17.429688 16.363281 17.28125 16.1875 L 14.5625 13.0625 C 14.5625 13.042969 14.5625 13.019531 14.5625 13 C 14.5625 12.445313 14.277344 11.96875 13.84375 11.6875 L 13.65625 6.6875 C 13.644531 6.457031 13.449219 6.0625 13 6.0625 Z" />
                          </svg>
                        </td>
                      ) : (
                        <td className="p-3 font-medium"></td>
                      )
                    ) : (
                      <td className="p-3 font-medium">{item.preparadoUser}</td>
                    )}

                    {item.cirugiaUser === "vacio" ? (
                      item.colocarCronometro === "cirugia" ? (
                        <td className="p-3 font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-base sm:text-sm">
                          {item.timer}:{seconds}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-9 inline-block px-1"
                            viewBox="0 0 26 26"
                          >
                            <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 11.9375 2.75 C 12.007813 2.742188 12.085938 2.753906 12.15625 2.75 C 11.972656 2.957031 11.875 3.222656 11.875 3.5 L 11.875 4 C 11.875 4.621094 12.378906 5.125 13 5.125 C 13.621094 5.125 14.125 4.621094 14.125 4 L 14.125 3.5 C 14.125 3.222656 14.027344 2.957031 13.84375 2.75 C 18.863281 3.15625 22.84375 7.136719 23.25 12.15625 C 23.042969 11.972656 22.777344 11.875 22.5 11.875 L 22 11.875 C 21.957031 11.871094 21.917969 11.871094 21.875 11.875 C 21.253906 11.910156 20.777344 12.441406 20.8125 13.0625 C 20.847656 13.683594 21.378906 14.160156 22 14.125 L 22.5 14.125 C 22.777344 14.125 23.042969 14.027344 23.25 13.84375 C 22.84375 18.863281 18.863281 22.84375 13.84375 23.25 C 14.027344 23.042969 14.125 22.777344 14.125 22.5 L 14.125 22 C 14.132813 21.652344 13.984375 21.320313 13.714844 21.101563 C 13.445313 20.878906 13.089844 20.796875 12.75 20.875 C 12.226563 20.992188 11.859375 21.464844 11.875 22 L 11.875 22.5 C 11.875 22.777344 11.972656 23.042969 12.15625 23.25 C 7.148438 22.84375 3.167969 18.878906 2.75 13.875 C 2.960938 14.046875 3.226563 14.136719 3.5 14.125 L 4 14.125 C 4.621094 14.125 5.125 13.621094 5.125 13 C 5.125 12.378906 4.621094 11.875 4 11.875 L 3.5 11.875 C 3.457031 11.871094 3.417969 11.871094 3.375 11.875 C 3.148438 11.882813 2.933594 11.960938 2.75 12.09375 C 3.175781 7.175781 7.039063 3.25 11.9375 2.75 Z M 13 6.0625 C 12.546875 6.0625 12.359375 6.457031 12.34375 6.6875 L 12.09375 11.71875 C 11.695313 12.003906 11.4375 12.472656 11.4375 13 C 11.4375 13.867188 12.132813 14.5625 13 14.5625 C 13.054688 14.5625 13.101563 14.535156 13.15625 14.53125 L 16.21875 17.25 C 16.390625 17.402344 16.824219 17.519531 17.1875 17.15625 C 17.550781 16.792969 17.429688 16.363281 17.28125 16.1875 L 14.5625 13.0625 C 14.5625 13.042969 14.5625 13.019531 14.5625 13 C 14.5625 12.445313 14.277344 11.96875 13.84375 11.6875 L 13.65625 6.6875 C 13.644531 6.457031 13.449219 6.0625 13 6.0625 Z" />
                          </svg>
                        </td>
                      ) : (
                        <td className="p-3 font-medium"></td>
                      )
                    ) : (
                      <td className="p-3 font-medium">{item.cirugiaUser}</td>
                    )}

                    {item.recuperacionUser === "vacio" ? (
                      item.colocarCronometro === "recuperacion" ? (
                        <td className="p-3 font-bold 2xl:text-3xl xl:text-xl lg:text-xl md:text-base sm:text-sm">
                          {item.timer}:{seconds}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-9 inline-block px-1"
                            viewBox="0 0 26 26"
                          >
                            <path d="M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 20.074219 5.925781 25.8125 13 25.8125 C 20.074219 25.8125 25.8125 20.074219 25.8125 13 C 25.8125 5.925781 20.074219 0.1875 13 0.1875 Z M 11.9375 2.75 C 12.007813 2.742188 12.085938 2.753906 12.15625 2.75 C 11.972656 2.957031 11.875 3.222656 11.875 3.5 L 11.875 4 C 11.875 4.621094 12.378906 5.125 13 5.125 C 13.621094 5.125 14.125 4.621094 14.125 4 L 14.125 3.5 C 14.125 3.222656 14.027344 2.957031 13.84375 2.75 C 18.863281 3.15625 22.84375 7.136719 23.25 12.15625 C 23.042969 11.972656 22.777344 11.875 22.5 11.875 L 22 11.875 C 21.957031 11.871094 21.917969 11.871094 21.875 11.875 C 21.253906 11.910156 20.777344 12.441406 20.8125 13.0625 C 20.847656 13.683594 21.378906 14.160156 22 14.125 L 22.5 14.125 C 22.777344 14.125 23.042969 14.027344 23.25 13.84375 C 22.84375 18.863281 18.863281 22.84375 13.84375 23.25 C 14.027344 23.042969 14.125 22.777344 14.125 22.5 L 14.125 22 C 14.132813 21.652344 13.984375 21.320313 13.714844 21.101563 C 13.445313 20.878906 13.089844 20.796875 12.75 20.875 C 12.226563 20.992188 11.859375 21.464844 11.875 22 L 11.875 22.5 C 11.875 22.777344 11.972656 23.042969 12.15625 23.25 C 7.148438 22.84375 3.167969 18.878906 2.75 13.875 C 2.960938 14.046875 3.226563 14.136719 3.5 14.125 L 4 14.125 C 4.621094 14.125 5.125 13.621094 5.125 13 C 5.125 12.378906 4.621094 11.875 4 11.875 L 3.5 11.875 C 3.457031 11.871094 3.417969 11.871094 3.375 11.875 C 3.148438 11.882813 2.933594 11.960938 2.75 12.09375 C 3.175781 7.175781 7.039063 3.25 11.9375 2.75 Z M 13 6.0625 C 12.546875 6.0625 12.359375 6.457031 12.34375 6.6875 L 12.09375 11.71875 C 11.695313 12.003906 11.4375 12.472656 11.4375 13 C 11.4375 13.867188 12.132813 14.5625 13 14.5625 C 13.054688 14.5625 13.101563 14.535156 13.15625 14.53125 L 16.21875 17.25 C 16.390625 17.402344 16.824219 17.519531 17.1875 17.15625 C 17.550781 16.792969 17.429688 16.363281 17.28125 16.1875 L 14.5625 13.0625 C 14.5625 13.042969 14.5625 13.019531 14.5625 13 C 14.5625 12.445313 14.277344 11.96875 13.84375 11.6875 L 13.65625 6.6875 C 13.644531 6.457031 13.449219 6.0625 13 6.0625 Z" />
                          </svg>
                        </td>
                      ) : (
                        <td className="p-3 font-medium"></td>
                      )
                    ) : (
                      <td className="p-3 font-medium">
                        {item.recuperacionUser}
                      </td>
                    )}

                    <td className="p-3 font-medium"></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PacientesCirugias;
