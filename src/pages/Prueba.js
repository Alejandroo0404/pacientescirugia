import React, { useState } from 'react'

const API = [
    {
    "nombre_paciente": "Maria Camila",
    "cedula_paciente": "1111111111",
    "ingreso a sala": "4:45"
    },
    {
    "nombre_paciente": "Maria Camila",
    "cedula_paciente": "1111111111",
    "preparado": "5:45"
    },
    {
    "nombre_paciente": "Maria Camila",
    "cedula_paciente": "1111111111",
    "cirugia": "6:45"
    },
    {
    "nombre_paciente": "Hugo Martin",
    "cedula_paciente": "2222222222",
    "ingreso a sala": "11:45"
    },
    {
    "nombre_paciente": "Marcelo Marcelo",
    "cedula_paciente": "3333333333",
    "ingreso a sala": "22:28"
    },
    {
    "nombre_paciente": "Marcelo Marcelo",
    "cedula_paciente": "3333333333",
    "preparado": "22:30"
    },
    {
    "nombre_paciente": "Marcelo Marcelo",
    "cedula_paciente": "3333333333",
    "cirugia": "22:31"
    },
    {
    "nombre_paciente": "Marcelo Marcelo",
    "cedula_paciente": "3333333333",
    "recuperacion": "8:39"
    },
    {
    "nombre_paciente": "Hugo Martin",
    "cedula_paciente": "2222222222",
    "preparado": "8:57"
    },
    {
    "nombre_paciente": "Maria Camila",
    "cedula_paciente": "1111111111",
    "recuperacion": "10:42"
    },
    {
    "nombre_paciente": "Hugo Martin",
    "cedula_paciente": "2222222222",
    "cirugia": "10:15"
    },
    {
    "nombre_paciente": "Lina Ximena",
    "cedula_paciente": "1124569522",
    "ingreso a sala": "15:19"
    },
    {
    "nombre_paciente": "Lina Ximena",
    "cedula_paciente": "1124569522",
    "preparado": "15:19"
    }
    ];

const Prueba = () => {
    const [userss, setUserss] = useState([]);
    //console.log(API)

    for (let i = 0; i < API.length; i++) {
        //console.log(userss.length, "NUMERO");
        //if (i === 0) {
            //console.log(API[i].nombre_paciente)
            // for (let j = 0; j < userss.length; j++) {
            //     if (condition) {
                    
            //     }else{

            //     }
            //     setUserss([...userss, {
            //         "nombre_paciente":API[j].nombre_paciente, 
            //         "cedula_paciente":API[j].cedula_paciente,
            //         //"ingreso a sala":API[i]["ingreso a sala"]
            //     }])                
            // }
            // setUserss([{
            //     "nombre_paciente":API[i].nombre_paciente, 
            //     "cedula_paciente":API[i].cedula_paciente,
            //     "ingreso a sala":API[i].preparado
                
            // }])
            //setUserss(API[i].nombre_paciente)
            
        //}
        //else{
            //console.log("que mas")
            
            
            // console.log(userss.length, "USERR")
        //}        
    }
    console.log(userss,"USERS")
  return (

    <div>hola</div>
  )
}

export default Prueba