import React from 'react'

const ModalCirugiaQuirofano = ({setModalOnCirugiaQuirofano,setChoicerCirugiaQuirofano}) => {
    const handleCancelarClick = () => {
        setModalOnCirugiaQuirofano(false)
        setChoicerCirugiaQuirofano(false)
    
    }
      return (
        <div className="z-40 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
      <div className="sm:h-[calc(100%-3rem)] max-w-7xl my-6 mx-auto relative w-auto pointer-events-none pt-24">
        <div
          className="max-h-full overflow-hidden border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div
            className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
              Lista de Selección Salas de Cirugía
            </h5>
            <button type="button"
            onClick={handleCancelarClick}
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div className="flex-auto overflow-y-auto relative p-4">
            <div className="flex py-2 text-left">
                <div className="w-1/3  px-4">
                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                         Sedes
                    </label>
                    <div className="w-2/3 ">
                                    
                                    <select className="form-select block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-label="Default select example" >
                                        <option >Sin seleccionar</option>
                                        <option value="1">Pruebas Ospedale</option>
                                        <option value="2">Todas</option>
                                    </select>
                                </div>
                    </div>
                                
                                
                                
                                
                                
            </div>
            
            <div className="flex flex-col">
            <div className="overflow-x-auto ">
              <div className="py-4 inline-block min-w-full sm:px-6 ">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Código
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Descripción
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div
            className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button"
            onClick={handleCancelarClick}
              className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal">
              Cancelar
            </button>
            <button type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
      )
}

export default ModalCirugiaQuirofano