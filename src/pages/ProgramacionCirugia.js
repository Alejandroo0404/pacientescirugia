const ProgramacionCirugia = () => {
  return (
    <div className="container">
      <div className=" text-2xl text-gray-900 font-medium pb-3">
        Programación de cirugías
      </div>
      <div className="flex">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Fecha cirugía inicial
          </label>
          <div className="flex">
            <input
              name="search"
              type="date"
              className="form-control
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

            {/* <div className="px-3">
              <button
                type="submit"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Buscar
              </button>
            </div> */}
          </div>
        </div>
        <div className="mb-3 xl:w-96 pl-5">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Fecha cirugía final
          </label>
          <div className="flex">
            <input
              name="search"
              type="date"
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

            {/* <div className="px-3">
              <button
                type="submit"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Buscar
              </button>
            </div> */}
          </div>
        </div>
        <div className="mb-3 xl:w-96 pl-5">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Sede
          </label>
          <div className="mb-3 xl:w-96">
            <select
              className="form-select 
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option defaultValue>CLINICA OSPEDALE MANIZALES</option>
              {/* <option value="1">Reservado</option>
              <option value="2">Confirmado</option>
              <option value="3">Ingreso sala</option> */}
            </select>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Estados
          </label>
          <div className="mb-3 xl:w-96">
            <select
              className="form-select 
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option defaultValue>Todas</option>
              {/* <option value="1">Reservado</option>
              <option value="2">Confirmado</option>
              <option value="3">Ingreso sala</option> */}
            </select>
          </div>
        </div>
        <div className="mb-3 xl:w-96 pl-5">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Sala
          </label>
          <div className="mb-3 xl:w-96">
            <select
              className="form-select 
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option defaultValue>Todas</option>
              {/* <option value="1">Reservado</option>
              <option value="2">Confirmado</option>
              <option value="3">Ingreso sala</option> */}
            </select>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Paciente
          </label>
          <div className="mb-3 xl:w-96">
            <select
              className="form-select 
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option defaultValue>Todos</option>
              {/* <option value="1">Reservado</option>
              <option value="2">Confirmado</option>
              <option value="3">Ingreso sala</option> */}
            </select>
          </div>
        </div>
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          ></label>
          <div className="mb-3 xl:w-96 pt-2 pl-5">
            <input
              name="search"
              //value={searchUser}
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
          </div>
        </div>
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          ></label>
          <div className="mb-3 xl:w-96 pt-2 pl-5">
            <input
              name="search"
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
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Médico reserva
          </label>
          <div className="mb-3 xl:w-96">
            <input
              name="search"
              //value={searchUser}
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
          </div>
        </div>
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          ></label>
          <div className="mb-3 xl:w-96 pt-2 pl-5">
            <input
              name="search"
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
          </div>
        </div>
      </div>
      {/* Tabla */}
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
                      Fecha
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Id paciente
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Tipo de documento
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Nombre paciente
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
                      Especialista
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Cirugía
                    </td> */}
                    <td>
                      <div className="pt-2">
                        <div className="mb-3 xl:w-96">
                          <select
                            className="form-select 
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
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Pendiente</option>
                            <option value="1">Reservado</option>
                            <option value="2">Confirmado</option>
                            <option value="3">Ingreso sala</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">63045</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">29/07/2022</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">1002752067</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">CC</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">LUISA MARIA SALAZAR CARDONA</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">APENDICECTOMIA VIA ABIERTA</td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"></td>
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
    </div>
  );
};

export default ProgramacionCirugia;
