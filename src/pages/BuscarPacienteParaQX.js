import axios from "axios";
import React, { useState } from "react";
import Cirugia from "./Cirugia";
import SeleccionarUnQX from "./SeleccionarUnQX";

const BuscarPacienteParaQX = () => {
  const [userDate, setUserDate] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const [cirugiaP, setCirugiaP] = useState(false)
  
  const searchUserD = async (e) => {
    e.preventDefault();    
    let user = e.target.search.value
    const body = {IdCedula : user}
    await axios.post("http://127.0.0.1:8000/api/cedulaqx", body)
    .then((response) =>{      
      setUserDate([])
      if(response.data[0]){
        setSearchUser(response.data[0])
      }
    })
  
  };

  const searchUserDateApi = async (e) => {
    e.preventDefault();
    let user = e.target.userId.value    
    let date = e.target.date.value    
    const body = {IdCedula : user, IdFecha_actual:date}
    // await axios.post("http://127.0.0.1:8000/api/cedulaqxs", body)
    // .then((response) =>{      
    //   setSearchUser([])
    //   setUserDate(response.data)
    // })
    await axios.post("http://127.0.0.1:8000/api/modificar1", body)
    .then((response) =>{
      let userStates = {};
      let date = response.data;
      date = date.filter(items => userStates[items.HISCKEY]? false : userStates[items.HISCKEY] = true)
      //console.log(date)
      setUserDate(date)
    })
  }



  const handleState = async (e) =>{
    e.preventDefault();
    let states = e.target.value
    //console.log(states)
    //setList([...list, `${hour}:${minutes}:${seconds}`]);
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
    //console.log(userDate[0].ProCirCod , "id cirugia")
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

  const cirugiaPaciente = ()=>{
    if(cirugiaP){
      setCirugiaP(false)
    }else if(!cirugiaP){
      setCirugiaP(true)
    }
  }


  return (
    <div className="">
      <div className=" text-2xl text-gray-900 font-medium pb-3">
        Programación de Qx 
      </div>
      
      {/* <form onSubmit={searchUserD}>
      <div className="flex">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Número de documento de identidad
          </label>
          <div className="flex">
            <input
              name='search'
              //value={searchUser}
              type="number"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-900
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlInput1"
              placeholder=""
            />

            <div className="px-3">
              <button
                // onSubmit={searchUserD}
                //value={searchUser}

                type="submit"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>


       
      </div>
      </form> */}
      <form onSubmit={searchUserDateApi}>
      <div className="flex">
      <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Número de documento de identidad
          </label>
          <div className="flex">
            <input
              name='userId'
              
              type="number"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-900
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlInput1"
              placeholder=""
            />

            
          </div>
        </div>
        <div className="mb-3 pl-5">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Fecha
          </label>
          <div className="flex">
          <div className="flex items-center justify-center">
              <div className="datepicker relative form-floating mb-3 xl:w-96">
                  <input type="date" name="date"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date" />
                  
                </div>
              </div>

            <div className="px-3">
              <button
                type="submit"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      </form>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Estado
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      N° Cirugía
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      N° documento de identidad
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Fecha
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Procedimiento
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Modificar
                    </th>
                  </tr>
                </thead>
                <tbody>
                {(searchUser.length === -0)? <tr className="bg-white border-b p-5"></tr>:
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
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                    {searchUser.HCPrcCod} 
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                    {searchUser.HISCKEY}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                    {searchUser.MPNOMC}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {searchUser.HCFcHrOrd}
                    </td>
                    {/* <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      
                    </td> */}
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        <div className="">
                                <button
                                  type="button"
                                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                  Modificar
                                </button>
                        </div>
                      </td>
                    {/* <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-center"> */}
                      {/* <div className="flex items-center mr-4"> */}
                      {/* <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      /> */}
                      {/* </div> */}
                    {/* </td> */}
                  </tr>}
                  {
                    (userDate.length == 1)? 
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
                        {userDate[0].ProCirCod}
                      </td>
                      <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {userDate[0].HISCKEY }
                      </td>
                      <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {userDate[0].MPNOMC }
                      </td>
                      <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {userDate[0].HCFcHrOrd }
                      </td>
                      <td className="text-xs text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {userDate[0]["PrNomb "] }
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
                    </tr>:<tr className="bg-white border-b p-5"></tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {cirugiaP? 
      <div>
        <Cirugia userDate={userDate}/>
        <div className="p-10">
                                <button
                                  onClick={cirugiaPaciente}
                                  type="button"
                                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                  Cancelar
                                </button>
                        </div>
      </div>: <div></div>}
                  
      {/* <div className="px-3 py-5">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Modificar
              </button>
      </div> */}
      {/* <SeleccionarUnQX/> */}
      
 
       {/* <Cirugia/> */}
      {/* <section className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap ">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-gray-400 text-center">
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-gray-800
                           py-1
                           lg:py-7
                           px-3
                           lg:px-4
                            
                           "
                      >
                        Cédula 
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-gray-800
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        Nombre
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-gray-800
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                          
                           "
                      >
                        Register
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                      >
                        111111111
                      </td>
                      <td
                        className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                      >
                        Jasmin Jasmin
                      </td>                   
                      
                      
                      <td
                        className="
                        text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                      >
                        <a
                          
                          className="
                              border border-primary
                              py-2
                              px-6
                              text-primary
                              inline-block
                              rounded
                              hover:bg-primary hover:text-white
                              "
                        >
                          Sign Up
                        </a>
                      </td>
                    </tr>
                    
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="  ">
        <div className=" ">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border ">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="font-semibold text-gray-800">Manage Carts</div>
            </header>

            <div className="overflow-x-auto p-3">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">Product Name</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Quantity</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Total</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="p-2">
                      <input type="checkbox" className="w-5 h-5" value="id-1" />
                    </td>
                    <td className="p-2">
                      <div className="font-medium text-gray-800">
                        Samsung Galaxy Note 4
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left">1</div>
                    </td>
                    <td className="p-2">
                      <div className="text-left font-medium text-green-500">
                        RM 2,890.66
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2">
                      <input type="checkbox" className="w-5 h-5" value="id-2" />
                    </td>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">
                          Logitech Keyboard
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left">1</div>
                    </td>
                    <td className="p-2">
                      <div className="text-left font-medium text-green-500">
                        RM 120.50
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="p-2">
                      <input type="checkbox" className="w-5 h-5" value="id-3" />
                    </td>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">Earphone</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left">1</div>
                    </td>
                    <td className="p-2">
                      <div className="text-left font-medium text-green-500">
                        RM 15.00
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BuscarPacienteParaQX;
