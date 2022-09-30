import axios from "axios";
import React, { useState } from "react";
import Cirugia from "./Cirugia";
import SeleccionarUnQX from "./SeleccionarUnQX";

const BuscarPacienteParaQX = () => {
  const [user, setUser] = useState();
  const [searchUser, setSearchUser] = useState();
  const searchUserId = (e) => setSearchUser(e.target.value);

  return (
    <div className="container py-10">
      <div className="text-center text-2xl text-gray-900 font-medium">
        Buscar pacientes para realizar un procedimiento QX
      </div>
      {/* <div className="">
        <div>Cedula del paciente</div>
        <input className="border-2 border-gray-400 rounded p-1" />
      </div> */}
      <div className="">
        <div className="mb-3 xl:w-96">
          <label
            for="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Número de documento de identidad
          </label>
          <div className="flex">
            <input
              onChange={searchUserId}
              type="text"
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
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Número de documento de identidad
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Realizar un procedimiento QX
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      11111111
                    </td>
                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      Pedro Pedro
                    </td>
                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-center">
                      {/* <div class="flex items-center mr-4"> */}
                      <input
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      {/* </div> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <SeleccionarUnQX/>
      <Cirugia/>
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

      {/* <section class="  ">
        <div class=" ">
          <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border ">
            <header class="px-5 py-4 border-b border-gray-100">
              <div class="font-semibold text-gray-800">Manage Carts</div>
            </header>

            <div class="overflow-x-auto p-3">
              <table class="table-auto w-full">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th class="p-2">
                      <div class="font-semibold text-left">Product Name</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-left">Quantity</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-left">Total</div>
                    </th>
                  </tr>
                </thead>

                <tbody class="text-sm divide-y divide-gray-100">
                  <tr>
                    <td class="p-2">
                      <input type="checkbox" class="w-5 h-5" value="id-1" />
                    </td>
                    <td class="p-2">
                      <div class="font-medium text-gray-800">
                        Samsung Galaxy Note 4
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="text-left">1</div>
                    </td>
                    <td class="p-2">
                      <div class="text-left font-medium text-green-500">
                        RM 2,890.66
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td class="p-2">
                      <input type="checkbox" class="w-5 h-5" value="id-2" />
                    </td>
                    <td class="p-2">
                      <div>
                        <div class="font-medium text-gray-800">
                          Logitech Keyboard
                        </div>
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="text-left">1</div>
                    </td>
                    <td class="p-2">
                      <div class="text-left font-medium text-green-500">
                        RM 120.50
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td class="p-2">
                      <input type="checkbox" class="w-5 h-5" value="id-3" />
                    </td>
                    <td class="p-2">
                      <div>
                        <div class="font-medium text-gray-800">Earphone</div>
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="text-left">1</div>
                    </td>
                    <td class="p-2">
                      <div class="text-left font-medium text-green-500">
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
