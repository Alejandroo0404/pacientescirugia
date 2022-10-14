import React, { useState } from "react";

const Cirugia = (props) => {
  const [hola, setHola] = useState('hola')
  let hh = ""
  console.log(props.userDate[0].MPCedu, "holaa")
  //setHola('holaa')
  return (
    <div className=" py-10">
      <div className="text-center text-2xl text-gray-900 font-medium">
        Cirugía
      </div>

      <div className="flex py-5">
        {/* <div className="mb-3 xl:w-96">
          <div className="flex">
            <label
              
              className="form-label inline-block mb-2 text-gray-900 font-medium px-3 my-2"
            >
              Empresa
            </label>
            <div className="flex">
              <input
                
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
            
            <label
              
              className="form-label inline-block mb-2 text-gray-900 font-medium px-3 my-2"
            >
              Empresa
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
          
        </div> */}

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Empresa
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              defaultValue={props.userDate[0].ProEmpCod}
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Sede
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              defaultValue={props.userDate[0]["ProCirCod "]}
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

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            N° Cirugía
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              defaultValue={props.userDate[0].ProCirCod}
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            N° Autorización
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
      </div>

      <div className="flex ">
        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Estado
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              defaultValue={"Pendiente"}
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Quirófano
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              defaultValue={props.userDate[0].ProCons}
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

        

        <div className="mb-3 xl:w-96 px-4 pt-2">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Sede Quirófano
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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

        {/* <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Edad
          </label>
          <div className="flex">
            <div className="pr-3">
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
            <div>
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
                placeholder="AÑOS"
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="flex ">
        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Indicador oportunidad
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Fecha inicial
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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
          </div>
        </div>

        

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
           Hora Inicial 
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              type="time"
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Fecha final
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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
          </div>
        </div>

        {/* <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Edad
          </label>
          <div className="flex">
            <div className="pr-3">
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
            <div>
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
                placeholder="AÑOS"
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="flex ">
        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Hora final
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              type="time"
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Duración
          </label>
          <div className="flex">
            <div className="pr-2">
              <input
                //   onChange={searchUserId}
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
                placeholder="HH"
              />
            </div>
            <div className="pt-2">:</div>
            <div className="pl-2">
              <input
                //   onChange={searchUserId}
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
                placeholder="MM"
              />
            </div>
          </div>
        </div>

        

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
           Número documento 
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              defaultValue={props.userDate[0].HISCKEY}
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Tipo de documento
          </label>
          <div className="flex">
            <input
            defaultValue={props.userDate[0].MPTDoc}
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

        {/* <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Edad
          </label>
          <div className="flex">
            <div className="pr-3">
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
            <div>
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
                placeholder="AÑOS"
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="flex ">
        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Nombre paciente
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              
              defaultValue={props.userDate[0].MPNOMC}
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Edad
          </label>
          <div className="flex">
            <div className="pr-3">
              <input
                //   onChange={searchUserId}
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
            <div>
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
                placeholder="AÑOS"
              />
            </div>
          </div>
        </div>

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Opción
          </label>
          <div className="mb-3 xl:w-96">
            <select
              className="form-select 
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
              <option >Sin Seleccionar</option>
              <option value="2">Programada</option>
              <option value="1">Urgencias</option>
            </select>
          </div>
        </div>

        

        

        

        
      </div>

      <div className="flex ">
        

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Reservado por
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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

        

        <div className="mb-3 xl:w-96 px-4 pt-2">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Especialidad
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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

        

        <div className="mb-3 xl:w-96 px-4 pt-2">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            
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

        

        
      </div>

      <div className="flex ">
        

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Cirujano a cargo
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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

        

        <div className="mb-3 xl:w-96 px-4 pt-2">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Especialidad
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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

        

        <div className="mb-3 xl:w-96 px-4 pt-2">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            
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

        

        
      </div>

      <div className=" text-gray-900 font-medium pl-4 py-5 text-lg">
        Datos preoperatorios
      </div>

      <div className="flex ">
        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Entidad aseguradora
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
              defaultValue={props.userDate[0].ProEPS}
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
          <div className="pt-8">
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
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Lateralidad
          </label>
          <div className="flex">
            <div className="mb-3 xl:w-96">
              <select
                className="form-select 
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
                <option >Sin seleccionar</option>
                <option value="1">Derecho</option>
                <option value="2">Izquierdo</option>
                <option value="3">Bilateral</option>
                <option value="3">No aplica</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Tipo de anestesia
          </label>
          <div className="flex">
            <div className="mb-3 xl:w-96">
              <select
                className="form-select 
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
                <option >Sin seleccionar</option>
                <option value="1">General</option>
                <option value="2">Local</option>
                <option value="3">Epidural</option>
                
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="form-check pl-4">
      <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckDefault"/>
      <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Req valoración preanestésica?
          </label>
    </div>
      


      <div className="flex ">
      <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Estado del paciente
          </label>
          <div className="flex">
            <div className="mb-3 xl:w-96">
              <select
                className="form-select 
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
                <option >Sin seleccionar</option>
                <option value="1">Vivo</option>
                <option value="2">Rescate</option>
                <option value="3">Cuidados intensivos</option>
                <option value="3">Conciente</option>
                <option value="3">Semiconciente</option>
                <option value="3">Inconciente</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Dx Preoperatorios
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
          <div className="pt-8">
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
        
      </div>
      <div className=" text-gray-900 font-medium pl-4 py-5 text-lg">
        Preparación de la cirugía
      </div>
      <div className="flex ">
        <div>
          <div className="form-check pl-4">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Reserva de cama?
              </label>
          </div>
          <div className="mb-3 xl:w-96 px-4">
              <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Tipo de cama cx
              </label>
              <div className="flex">
                <div className="mb-3 xl:w-96">
                  <select
                    className="form-select 
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
                    <option >Sin seleccionar</option>
                    <option value="1">Derecho</option>
                    <option value="2">Izquierdo</option>
                    <option value="3">Bilateral</option>
                    <option value="3">No aplica</option>
                  </select>
                </div>
              </div>
          </div>
          <div className="mb-3 xl:w-96 pl-4">    
            <textarea
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
            ></textarea>
          </div>
        </div>
        <div className="pl-10">
          <div className="form-check pl-4 pt-5">
        <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id="flexCheckChecked" />
        <label
              
              className="form-label inline-block mb-2 text-gray-900 font-medium"
            >
              Req materiales especiales?
            </label>
          </div>
          <div className="mb-3 xl:w-96 pl-4">
    
    <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder=""
    ></textarea>
          </div>
        </div>
        <div className="pl-10">
          <div className="form-check pl-4 pt-5">
      <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id="flexCheckChecked" />
      <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Req disp equipos especiales?
          </label>
          </div>
          <div className="mb-3 xl:w-96 pl-4">
    
    <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder=""
    ></textarea>
          </div>
        </div>        
      </div>

    <div className="flex pt-10">
      <div className="pl-4">
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Ninguna
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Blanda
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Liquida
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Corriente
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Hiposódica
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Ayuno
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Enema Evacuador
          </label>
        </div>
      </div>
      <div className="pl-10">
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Premedicación
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                6 Horas antes
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                8 Horas antes
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                12 Horas antes
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                24 Horas antes
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Acompañante
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
          <label
                
                className="form-label inline-block mb-2 text-gray-900 font-medium"
              >
                Rasurada
          </label>
        </div>
      </div>
      <div className="pl-10">
        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Entidad aseguradora
          </label>
          <div className="flex">
            <input
              //   onChange={searchUserId}
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
        <div className="mb-3 xl:w-96 pl-4">    
            <textarea
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
            ></textarea>
        </div>
        
      </div>
      <div className="pl-10">
        <div className="mb-3 xl:w-96 ">
            <label className="form-label inline-block mb-2 text-gray-900 font-medium">
              Obs. Quirurgicas
            </label>           
        </div>
        <div className="mb-3 xl:w-96 ">    
            <textarea
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder=""
            ></textarea>
        </div>
      </div>
    </div>  
    


      {/* <div className="flex ">
        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Req valoración preanestésica
          </label>
          <div className="flex">
            <div className="mb-3 xl:w-96">
              <select
                className="form-select 
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
                <option >Sin seleccionar</option>
                <option value="1">Unica vía</option>
                <option value="2">Diferente vía</option>
                <option value="3">Bilateral</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Lateralidad
          </label>
          <div className="flex">
            <div className="mb-3 xl:w-96">
              <select
                className="form-select 
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
                <option >Sin seleccionar</option>
                <option value="1">Derecho</option>
                <option value="2">Izquierdo</option>
                <option value="3">Bilateral</option>
                <option value="3">No aplica</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-3 xl:w-96 px-4">
          <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Opción
          </label>
          <div className="mb-3 xl:w-96">
            <select
              className="form-select 
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
              <option >Sin Seleccionar</option>
              <option value="2">Programada</option>
              <option value="1">Urgencias</option>
            </select>
          </div>
        </div>
      </div> */}
      {/* <div className="flex">
      <div>
    
    
    
    
    <div className="form-check">
      <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label
            
            className="form-label inline-block mb-2 text-gray-900 font-medium"
          >
            Req hemoderivados?
          </label>
    </div>
  </div>
      </div> */}

    </div>
  );
};

export default Cirugia;
