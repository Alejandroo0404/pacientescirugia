import axios from "axios";
import React, { useState } from "react";
import Cirugia from "./Cirugia";
import SeleccionarUnQX from "./SeleccionarUnQX";

const BuscarPacienteParaQX = () => {
  //const [user, setUser] = useState();
  const [searchUser, setSearchUser] = useState([]);
  
  const searchUserD = async (e) => {
    e.preventDefault();
    //setSearchUser(e.target.search.value)
    //console.log(e.target.search.value, "hola")
    let user = e.target.search.value
    const body = {IdCedula : user}
    await axios.post("http://127.0.0.1:8000/api/cedulaqx", body)
    .then((response) =>{
      console.log(response.data[0])
      if(response.data[0]){
        setSearchUser(response.data[0])
      }
    })
  
  };

  const searchUserApi = async (e) => {
    e.preventDefault();
    //const body = {IdCedula : searchUser}
    await axios.post("http://127.0.0.1:8000/api/cedulaqx")
    .then((response) =>{

    })
  }



  return (
    <div className="container py-10">
      <div className=" text-2xl text-gray-900 font-medium pb-3">
        Programación de Qx 
      </div>
      {/* <div className="">
        <div>Cedula del paciente</div>
        <input className="border-2 border-gray-400 rounded p-1" />
      </div> */}
      <form onSubmit={searchUserD}>
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


        {/* <div className="pl-10">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Fecha
          </label>
          <div className="flex">
          <div className="flex items-center justify-center">
  <div className="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" />
    
  </div>
</div>

            <div className="px-3">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      </form>
      {/* <div className="">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Fecha
          </label>
          <div className="flex">
          <div className="flex items-center justify-center">
  <div className="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" />
    
  </div>
</div>

            <div className="px-3">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div> */}

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
                      Número de documento de identidad
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
                      Procedimiento QX
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Cirugía
                    </td> */}
                    <td>
                    {(searchUser.length === -0)? "": <div className="pt-2">
                      <div className="mb-3 xl:w-96">
                        <select className="form-select 
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
                            <option defaultValue>Pendiente</option>
                            <option value="1">Reservado</option>
                            <option value="2">Confirmado</option>
                            <option value="3">Ingreso sala</option>
                        </select>
                      </div>
                    </div> }
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-5">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Modificar
              </button>
            </div>
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
