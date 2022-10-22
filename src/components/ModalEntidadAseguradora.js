import React from 'react'

const ModalEntidadAseguradora = ({setModalOnCirugiaEntidadAseguradora,setChoiceCirugiaEntidadAseguradora}) => {
    const handleCancelarClick = () => {
        setModalOnCirugiaEntidadAseguradora(false)
        setChoiceCirugiaEntidadAseguradora(false)
    
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
              Lista de Selección Empresa X Usuario
            </h5>
            <button type="button"
            onClick={handleCancelarClick}
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div className="flex-auto overflow-y-auto relative p-4">
            <div className="flex py-2 text-left">
                                <div className="w-1/5  px-4">
                                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                        N° del Documento
                                    </label>
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={dataUser.HISCKEY}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                </div>
                                <div className="w-1/5  px-4">
                                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Tipo de Documento
                                    </label>
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={dataUser.MPTDoc}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                </div>
                                <div className="w-3/5  px-4">
                                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                        Nombre del Paciente
                                    </label>
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={dataUser.MPNOMC}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                </div>
                                
                                
            </div>
            <div className="flex py-2 text-left">
                                <div className="w-2/5  px-4">
                                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                        Contrato
                                    </label>
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={dataUser.HISCKEY}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                </div>
                                <div className="w-3/5  px-4">
                                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Desc
                                    </label>
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={dataUser.MPTDoc}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                </div>
                                
                                
                                
            </div>
            
            <div className="flex flex-col ">
            <div className="overflow-x-auto ">
              <div className="py-4 inline-block min-w-full sm:px-6 ">
                <div className="overflow-hidden ">
                  <table className="min-w-full text-center bg-gray-200">
                    <thead className="border-b ">
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
                          N.I.T
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Tipo Contrato
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Contrato
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Descripción
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Descripción
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Tipo Afiliado
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          No. Carnet
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          A = Activo
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Cod. Reg
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Pabellón
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

export default ModalEntidadAseguradora