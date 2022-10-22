const Modal = ({ setModalOn, setChoice, user }) => {
    console.log(user, "usuario")
    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="   bg-zinc-200 opacity-100 fixed inset-0 z-50 	mx-auto ">
            <div className="flex h-screen justify-center items-center will-change-scroll">
                <div className=" justify-center  bg-white py-6 px-6 border-4 border-sky-500 rounded-xl">
                    <div className="flex flex-col">
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
                        <div className="flex py-2 text-left">
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                N° Quirófano
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
                            <div className="w-2/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Quirófano
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
                                    Sede Quirófano
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
                                    Indicador Oportunidad
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
                        <div className="flex py-2 text-left">
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Fecha Inicial
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    //defaultValue={props.userDate.ProEmpCod}
                                    type="date"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Hora Inicial
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    //defaultValue={props.userDate.ProEmpCod}
                                    type="time"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Fecha Final
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    //defaultValue={props.userDate.ProEmpCod}
                                    type="date"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Hora Final
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    //defaultValue={props.userDate.ProEmpCod}
                                    type="time"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Duración
                                </label>
                                <div className="flex">
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={props.userDate.ProEmpCod}
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder="HH"
                                    />
                                    <label className="pt-2 px-2">:</label>
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={props.userDate.ProEmpCod}
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder="MM"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex py-2 text-left">
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    N° del Documento
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    defaultValue={user.HISCKEY}
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
                                    defaultValue={user.MPTDoc}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-2/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Nombre del Paciente
                                </label>
                                <input
                                    //   onChange={searchUserId}
                                    //defaultValue={props.userDate[0].ProEmpCod}
                                    defaultValue={user.MPNOMC}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlInput1"
                                    placeholder=""
                                />
                            </div>
                            
                            <div className="w-1/5  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Edad
                                </label>
                                <div className="flex">
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={props.userDate.ProEmpCod}
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                    <label className="px-2"></label>
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={props.userDate.ProEmpCod}
                                        type="number"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex py-2 text-left">
                            <div className="w-1/2  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Reservado Por
                                </label>
                                <div className="flex">
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={props.userDate.ProEmpCod}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                    <label className="px-2"></label>
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
                            <div className="w-1/2  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Especialidad
                                </label>
                                <div className="flex">
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={props.userDate.ProEmpCod}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                    <label className="px-2"></label>
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
                            
                            
                            
                            
                        </div>
                        <div className="flex py-2 text-left">
                            <div className="w-1/2  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Cirujano a Cargo
                                </label>
                                <div className="flex">
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={props.userDate.ProEmpCod}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                    <label className="px-2"></label>
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
                            <div className="w-1/2  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Especialidad
                                </label>
                                <div className="flex">
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={props.userDate.ProEmpCod}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                    <label className="px-2"></label>
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
                        </div>
                        <div className="px-4 py-2 text-left">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Datos Preoperatorios:
                            </label>
                        </div>
                        <div className="flex py-2 text-left">
                            <div className="w-1/2  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Entidad Aseguradora
                                </label>
                                <div className="flex">
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        defaultValue={user.ProEPS}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                    <label className="px-2"></label>
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
                            
                        </div>
                        <div className="flex py-2 text-left">
                            <div className="w-1/3  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Lateralidad
                                </label>
                                <select className="form-select block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example" >
                                    <option >Sin seleccionar</option>
                                    <option value="1">Derecho</option>
                                    <option value="2">Izquierdo</option>
                                    <option value="3">Bilateral</option>
                                    <option value="3">No aplica</option>
                                </select>
                            </div>
                            <div className="w-1/3 px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Req Valoración Preanestésica?
                                </label>
                                <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                            </div>
                            <div className="w-1/3  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Tipo de Anestesia
                                </label>
                                <select className="form-select block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example" >
                                    <option >Sin seleccionar</option>
                                    <option value="1">General</option>
                                    <option value="2">Local</option>
                                    <option value="3">Epidural</option>
                                </select>
                            </div>                          
                        </div>
                        <div className="flex py-2 text-left">
                            <div className="w-1/2  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    Estado del Paciente
                                </label>
                                <select className="form-select block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example" >
                                    <option >Sin seleccionar</option>
                                    <option value="1">Vivo</option>
                                    <option value="2">Rescate</option>
                                    <option value="3">Cuidados intensivos</option>
                                    <option value="3">Conciente</option>
                                    <option value="3">Semiconciente</option>
                                    <option value="3">Inconciente</option>
                                </select>
                            </div>
                            <div className="w-1/2  px-4">
                                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                    DX Preoperatorio
                                </label>
                                <div className="flex">
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        //defaultValue={props.userDate.ProEmpCod}
                                        type="text"
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                        id="exampleFormControlInput1"
                                        placeholder=""
                                    />
                                    <label className="px-2"></label>
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
                        </div>
                        
                    {/* <div>
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
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
                        </div> */}
                        {/* <div>
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
                        </div> */}
                        {/* <div>
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
                        </div> */}
                        {/* <div>
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
                        </div> */}
                    </div>
                    
                    <div className="flex">
                        {/* <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-green-400 ">Yes</button> */}
                        <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500 ">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal
