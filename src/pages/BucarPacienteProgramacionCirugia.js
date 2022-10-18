import axios from "axios";
import React, { useState } from "react";
import TablaProgramacionCirugia from "../components/TablaProgramacionCirugia";

const BucarPacienteProgramacionCirugia = () => {
  const [userDate, setUserDate] = useState([]);
  

  const searchUserDateApi = async (e) => {
    e.preventDefault();
    let user = e.target.userId.value;
    let date = e.target.date.value;
    const body = { IdCedula: user, IdFecha_actual: date };

    await axios
      .post("http://127.0.0.1:8000/api/modificar1", body)
      .then((response) => {
        let userStates = {};
        let date = response.data;
        date = date.filter((items) =>
          userStates[items.HISCKEY] ? false : (userStates[items.HISCKEY] = true)
        );

        setUserDate(response.data);
      });
  }; 

  return (
    <div className="">
      <div className=" text-2xl text-gray-900 font-medium pb-3">
        Programación de Cirugía
      </div>

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
                name="userId"
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
                  <input
                    type="date"
                    name="date"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                  />
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
                  {userDate.map((item) => (
                    <TablaProgramacionCirugia user={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucarPacienteProgramacionCirugia;
