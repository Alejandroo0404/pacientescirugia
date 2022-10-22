import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ModalCirugiaQuirofano from './ModalCirugiaQuirofano'
import ModalCirugiaReservadoPor from './ModalCirugiaReservadoPor'
import ModalCirujanoCargo from './ModalCirujanoCargo'
import ModalEntidadAseguradora from './ModalEntidadAseguradora'
import ModalCirugiaPalabraClave from './ModalCirugiaPalabraClave'

const ModalCirugia = ({ setModalOn, setChoice, user }) => {
    const [dataUser, setDataUser] = useState([])
    const [fechaF, setFechaF] = useState('')
    const [fechaI, setFechaI] = useState('')
    const [edadPaciente, setEdadPaciente] = useState('')
    const [years, setYears] = useState('AÑOS')
    //Modal Cirujano a cargo
    const [modalOnCirujanoCargo, setModalOnCirujanoCargo] = useState(false)
    const [choiceCirujanoCargo, setChoiceCirujanoCargo] = useState(false)
    //Modal Quirofano
    const [modalOnCirugiaQuirofano, setModalOnCirugiaQuirofano] = useState(false)
    const [choicerCirugiaQuirofano, setChoicerCirugiaQuirofano] = useState(false)
    //Modal Reservado por
    const [modalOnCirugiaReservadoPor, setModalOnCirugiaReservadoPor] = useState(false)
    const [choiceCirugiaReservadoPor, setChoiceCirugiaReservadoPor] = useState(false)
    //Modal Entidad Aseguradora
    const [modalOnCirugiaEntidadAseguradora, setModalOnCirugiaEntidadAseguradora] = useState(false)
    const [choiceCirugiaEntidadAseguradora, setChoiceCirugiaEntidadAseguradora] = useState(false)
    //Modal Palabra Clave
    const [modalOnCirugiaPalabraClave,setModalOnCirugiaPalabraClave] = useState(false)
    const [choiceCirugiaPalabraClave, setChoiceCirugiaPalabraClave] = useState(false)

    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    const cirujanoACargo = () =>{
        setModalOnCirujanoCargo(true)
    }

    const cirugiaQuirofano = () =>{
        setModalOnCirugiaQuirofano(true)
    }

    const cirugiaReservadoPor = () =>{
        setModalOnCirugiaReservadoPor(true)
    }

    const cirugiaEntidadAseguradora = () =>{
        setModalOnCirugiaEntidadAseguradora(true)
    }

    const cirugiaPalabraClave = () =>{
        setModalOnCirugiaPalabraClave(true)
    }

    const modificarUser = async () =>{
        
        const body = {
            varProCirCod: user["ProCirCod "],
            varProEmpCod: user.ProEmpCod,
            varProMCDpto: user.ProMCDpto
        }
        await axios.post('http://127.0.0.1:8000/api/modifcar/orden', body)
        .then((response)=>{
            console.log(response.data, "la data para modificar")
            setDataUser(response.data[0])
            let fechaFinal = response.data[0].ProFecF.split(" ")[0]
            setFechaF(fechaFinal)
            let fechaInicial = response.data[0].ProFec.split(" ")[0]
            setFechaI(fechaInicial)
            let fechaNacimiento = response.data[0].MPFchN.split(" ")[0]
            let yearNacimiento = new Date(fechaNacimiento)
            let fechaActual = new Date()
            let calcularEdad = fechaActual.getFullYear() - yearNacimiento.getFullYear()
            let totalMes = (fechaActual.getMonth() + 1) - (yearNacimiento.getMonth() + 1)
            let totalDias = fechaActual.getDate() - (yearNacimiento.getDate() + 1)

            if(totalMes >= 0 && totalDias >= 0){
                setEdadPaciente(calcularEdad)
            }else if(totalMes >= 0){
                setEdadPaciente(calcularEdad)
            }else {
                setEdadPaciente(calcularEdad - 1)
            }
            
            
            //console.log(totalDias)
        })
    }
    useEffect(()=>{
        modificarUser()
    },[]);
  return (
    <>
        <div className="z-40 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto "
    id="exampleModalScrollable" tabIndex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
    <div className="sm:h-[calc(100%-3rem)]  my-6 mx-auto relative w-auto pointer-events-none pt-6">
        <div className=" overflow-hidden border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current ">
        <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md ">
            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
            Cirugía
            </h5>
            <button type="button"
            onClick={handleCancelClick}
            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal" aria-label="Close">X</button>
        </div>
        <div className="flex-auto overflow-y-auto relative p-4">
            
            <div className="flex flex-row py-2  text-left">
                                <div className="w-1/5  px-4 ">
                                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium " >
                                        Empresa
                                    </label>
                                    <input
                                        //   onChange={searchUserId}
                                        //defaultValue={props.userDate[0].ProEmpCod}
                                        defaultValue={dataUser.ProEmpCod}
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
                                        defaultValue={dataUser.ProMCDpto}
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
                                        defaultValue={dataUser.ProCirCod}
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
                                        defaultValue={dataUser.ProCirAut}
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
                                        onClick={cirugiaQuirofano}
                                        defaultValue={dataUser.ProCons}
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
                                        defaultValue={dataUser.ProNcons}
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
                                        Indi. Oportunidad
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
                                        defaultValue={fechaI}
                                        //defaultValue={dataUser.ProFec}
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
                                        defaultValue={dataUser.ProHorI}
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
                                        defaultValue={fechaF}
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
                                        defaultValue={dataUser.ProHorF}
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
                                            defaultValue={dataUser.ProDurHr}
                                            type="number"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                            id="exampleFormControlInput1"
                                            placeholder="HH"
                                        />
                                        <label className="pt-2 px-2">:</label>
                                        <input
                                            //   onChange={searchUserId}
                                            //defaultValue={props.userDate[0].ProEmpCod}
                                            defaultValue={dataUser.ProDurMn}
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
                                        defaultValue={dataUser.HISCKEY}
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
                                        defaultValue={dataUser.MPTDoc}
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
                                        defaultValue={dataUser.MPNOMC}
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
                                            defaultValue={edadPaciente}
                                            type="number"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                            id="exampleFormControlInput1"
                                            placeholder=""
                                        />
                                        <label className="px-2"></label>
                                        <input
                                            //   onChange={searchUserId}
                                            //defaultValue={props.userDate[0].ProEmpCod}
                                            defaultValue={years}
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
                                        Reservado Por
                                    </label>
                                    <div className="flex">
                                        <input
                                            //   onChange={searchUserId}
                                            //defaultValue={props.userDate[0].ProEmpCod}
                                            //defaultValue={props.userDate.ProEmpCod}
                                            onClick={cirugiaReservadoPor}
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
                                            onClick={cirujanoACargo}
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
                                            //defaultValue={dataUser.ProDxppal}
                                            type="text"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                            id="exampleFormControlInput1"
                                            placeholder=""
                                        />
                                        <label className="px-2"></label>
                                        <input
                                            //   onChange={searchUserId}
                                            //defaultValue={props.userDate[0].ProEmpCod}
                                            //defaultValue={dataUser.ProDN1}
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
                                            onClick={cirugiaEntidadAseguradora}
                                            defaultValue={dataUser.ProEPS}
                                            type="text"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                            id="exampleFormControlInput1"
                                            placeholder=""
                                        />
                                        <label className="px-2"></label>
                                        <input
                                            //   onChange={searchUserId}
                                            //defaultValue={props.userDate[0].ProEmpCod}
                                            defaultValue={dataUser.ProNEPS}
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
                                            defaultValue={dataUser.ProDxppal}
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
                                            defaultValue={dataUser.ProDN1}
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
                    Preparación de la Cirugía:
                </label>
            </div>
            <div className="flex px-4 py-2 text-left">
                <div className="w-1/3 ">
                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                        Reserva Cama?
                    </label>
                    <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                </div>
                <div className="w-1/3 px-4">
                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                        Req. Materiales Especiales?
                    </label>
                    <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                </div>
                <div className="w-1/3 ">
                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                        Req. Disp. Equipos Especiales?
                    </label>
                    <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                </div>
            </div>
            <div className="flex px-4  text-left">
                <div className="w-1/3 ">
                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                        Tipo de Cama CX
                    </label>
                    <select className="form-select block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        aria-label="Default select example" >
                        <option >Sin seleccionar</option>
                        <option value="1">Hospitalización</option>
                        <option value="2">UCI</option>                    
                    </select>
                </div>
                <div className="w-1/3 px-4">    
                    <textarea
                    defaultValue={dataUser.ProObMaE}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded
                        transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder=""
                    ></textarea>
                </div>
                <div className="w-1/3">    
                    <textarea
                    defaultValue={dataUser.ProObsEE}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded
                        transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder=""
                    ></textarea>
                </div>
            </div>
            <div className='px-4'>
                <div className="w-1/3 ">    
                    <textarea
                    defaultValue={dataUser.ProObRCam}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded
                        transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder=""
                    ></textarea>
                </div>
            </div>
            <div className='px-4 py-2 text-left'>
                <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                    Dieta:
                </label>
            </div>
            <div className='flex'>            
                <div className='flex px-4  text-left w-1/3 '>
                    <div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Ninguna
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Blanda
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Líquida
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Corriente
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Hiposódica
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Ayuno
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Enema Evacuador
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Premedicación
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                6 Horas Antes
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                8 Horas Antes
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                12 Horas Antes
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                24 Horas Antes
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Acompañante
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                        <div className="">
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Rasurada
                            </label>
                            <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                        </div>
                    </div>
                </div>
                <div className=" px-4  text-left w-1/3 ">
                    <div className=" ">
                        <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                            Palabra Clave
                        </label>
                        <input
                               //   onChange={searchUserId}
                              //defaultValue={props.userDate[0].ProEmpCod}
                              //defaultValue={edadPaciente}
                              onClick={cirugiaPalabraClave}
                                type="number"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="exampleFormControlInput1"
                                placeholder=""
                                />              
                        
                        <div className='pt-2'>
                            <textarea
                            defaultValue={dataUser.ProOBs1}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder=""
                            ></textarea>
                        </div>
                        <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                            Obs. Quirurgicas
                        </label>
                        <div className=''>
                            <textarea
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder=""
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className=" px-4  text-left w-1/3 ">
                    <div className="">
                        <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                            Hemoderivados
                        </label>
                        <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
                    </div>
                    <div className='flex'>
                    <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">^</button>
                    <div className='pl-2'>
                    <select className="form-select block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            aria-label="Default select example" >
                            <option >Sin seleccionar</option>
                                           
                    </select>
                    </div>
                    
                    
                    </div>
                    
                    <div className='flex'>
                        <div>
                            <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Cantidad
                            </label>
                            <input
                               //   onChange={searchUserId}
                              //defaultValue={props.userDate[0].ProEmpCod}
                              //defaultValue={edadPaciente}
                                type="number"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="exampleFormControlInput1"
                                placeholder=""
                                />
                        </div>                        
                        <div className="pl-2">                            
                        <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                                Vol. mL
                            </label>
                            <input
                            //   onChange={searchUserId}
                            //defaultValue={props.userDate[0].ProEmpCod}
                            //defaultValue={years}
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-900  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                            id="exampleFormControlInput1"
                            placeholder=""
                            />
                        </div>
                    </div>
                    <label  className="form-label inline-block mb-2 text-gray-900 font-medium" >
                    Observaciones
                    </label>
                    <div className="">    
                        <textarea
                        className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded
                            transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder=""
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button"
            onClick={handleCancelClick}
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
        
        {modalOnCirujanoCargo && < ModalCirujanoCargo setModalOnCirujanoCargo={setModalOnCirujanoCargo} setChoiceCirujanoCargo={setChoiceCirujanoCargo}/>} 
        {modalOnCirugiaQuirofano && < ModalCirugiaQuirofano setModalOnCirugiaQuirofano={setModalOnCirugiaQuirofano} setChoicerCirugiaQuirofano={setChoicerCirugiaQuirofano}/>}
        {modalOnCirugiaReservadoPor && < ModalCirugiaReservadoPor setModalOnCirugiaReservadoPor={setModalOnCirugiaReservadoPor} setChoiceCirugiaReservadoPor={setChoiceCirugiaReservadoPor}/>} 
        {modalOnCirugiaEntidadAseguradora && < ModalEntidadAseguradora setModalOnCirugiaEntidadAseguradora={setModalOnCirugiaEntidadAseguradora} setChoiceCirugiaEntidadAseguradora={setChoiceCirugiaEntidadAseguradora}/>}
        {modalOnCirugiaPalabraClave && < ModalCirugiaPalabraClave setChoiceCirugiaPalabraClave={setChoiceCirugiaPalabraClave} setModalOnCirugiaPalabraClave={setModalOnCirugiaPalabraClave}/>} 
    </>
  )
}

export default ModalCirugia