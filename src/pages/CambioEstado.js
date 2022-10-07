import axios from "axios";
import React, { useEffect, useState } from "react";
import StatesUser from "../components/StatesUser";

const CambioEstado = () => {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
 
  const searchUserId = (e) => setUserId(e.target.value);
  const apiUserId = async (e) => {
    e.preventDefault();
    await axios
      .get("http://192.241.142.26:81/api/movimiento/" + userId)
      .then((response) => {
        
        let dataUser = response.data
        let lastElement = dataUser[dataUser.length - 1]
        
        setData(lastElement)
      })
      .catch();
  };
 
 
  return (
    <>
      <div className="flex  justify-center mt-10 mb-3">
        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-600 ">
          Buscar por cédula de paciente
        </h4>
      </div>
      <form
        className="max-w-md mx-auto border-2 border-gray-100"
        onSubmit={apiUserId}
      >
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            value={userId}
            onChange={searchUserId}
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Buscar ..."
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-2 py-1 "
          >
            Buscar
          </button>
        </div>
      </form>

      <div className="">
        <div className="min-w-screen min-h-screen  flex  justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-3 text-left">id cirugia</th>
                    <th className="py-3 px-3 text-left">nombre cirujano</th>
                    <th className="py-3 px-3 text-left">nombre paciente</th>
                    <th className="py-3 px-3 text-left">cedula paciente</th>
                    <th className="py-3 px-3 text-left">estado paciente</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {
                  <tr className="border-b border-gray-200 hover:bg-gray-100" key={data.cedula_paciente}>
                      <td className="py-3 px-3 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium" >
                            {data.id_cirugia}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">
                            {data.nombre_cirujano}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">
                            {data.nombre_paciente}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">
                            {data.cedula_paciente}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">
                            <StatesUser users={data} />
                          </span>
                        </div>
                      </td>                      
                  </tr>
                    }                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CambioEstado;
