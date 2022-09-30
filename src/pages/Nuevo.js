import axios from 'axios'
import React, { useEffect, useState } from 'react'
const baseURL = "http://127.0.0.1:8000/api/pacientescirugiafecha";
const Nuevo = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
      <div>
        <h1>{post.map((items, index)=>(
            <div key={index}>{items.hora_cambio_estaddo}</div>))}</h1>
        {/* <p>{post.body}</p> */}
      </div>
    );
}

export default Nuevo