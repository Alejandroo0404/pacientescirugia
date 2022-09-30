import React from "react";

const SeleccionarUnQX = () => {
  return (
    <div className="container py-10">
      <div className="text-center text-2xl text-gray-900 font-medium">
        Seleccionar un procedimiento QX
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
                      Procedimientos QX
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Seleccionar el procedimiento QX
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Adenomectomia o prostatectomia
                    </td>

                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-center">
                      <input
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Herniorrafia epigástrica sod
                    </td>

                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-center">
                      <input
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Histeretectomia total abdominal
                    </td>

                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-center">
                      <input
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Paquete adenomectomia o prostate
                    </td>

                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-center">
                      <input
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Apendicectomia via abierta
                    </td>

                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-center">
                      <input
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Herniorrafia epigastrica via abi
                    </td>

                    <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap text-center">
                      <input
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-10">
        <div className="mb-3 xl:w-96">
          <label
            for="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Procedimiento QX
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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
        <div className="mb-3 xl:w-96 px-4">
          <label
            for="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Cantidad
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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

        <div className="mb-3 xl:w-96 px-4">
          <label
            for="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Causa externa
          </label>
          <div className="flex">
            <div class="mb-3 xl:w-96">
              <select
                class="form-select 
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
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
                <option selected>Enfermedad general</option>
                <option value="1">Enfermedad profesional</option>
                <option value="2">Evento catastrofico</option>
                <option value="3">Lesion auto infligida</option>
              </select>
            </div>
            <div className="px-3">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleccionarUnQX;
