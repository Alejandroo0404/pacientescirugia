import React from 'react'

const EstadosPacientes = () => {
    var array = [
        {id:1,nombre:'casa'},
        {id:2,nombre:'fruta'},
        {id:3,nombre:'mascotas'},
        {id:1,nombre:'casa'},
        {id:2,nombre:'fruta'},
        {id:4,nombre:'cosas'},
        {id:5,nombre:'otros'}
      ];
      console.log(array, "antes")
      
      let hash = {};
      array = array.filter(o => hash[o.id] ? false : hash[o.id] = true);
      console.log(array, "ahora");
  return (
    <div className="pt-2">
                          <div className="mb-3 xl:w-96">
                            <select  className="form-select 
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
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value="0">Pendiente</option>
                                <option value="1">Reservado</option>
                                <option value="2">Confirmado</option>
                                <option value="3">Ingreso sala</option>
                            </select>
                          </div>
                        </div>
  )
}

export default EstadosPacientes