import React from 'react'

const ModalCirugia = () => {
  return (
    <div className="z-40 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModalScrollable" tabIndex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
  <div className="sm:h-[calc(100%-3rem)] max-w-lg my-6 mx-auto relative w-auto pointer-events-none">
    <div className="max-h-full overflow-hidden border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
          Cirugía
        </h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="flex-auto overflow-y-auto relative p-4">
        <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
        <div className="flex flex-row py-2 sm:flex-wrap text-left">
                            <div className="w-1/5  px-4 ">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium " >
                                    Empresa
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    //defaultValue={props.userDate.ProEmpCod}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Sede
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    //defaultValue={props.userDate.ProEmpCod}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    N° Cirugía
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    //defaultValue={props.userDate.ProEmpCod}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    N° Autorización
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    //defaultValue={props.userDate.ProEmpCod}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Estado
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    //defaultValue={props.userDate.ProEmpCod}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>This content should appear at the bottom after you scroll.</p>
      </div>
      <div
        className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default ModalCirugia