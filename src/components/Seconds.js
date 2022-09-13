import React, { useEffect, useState } from "react";

const Seconds = () => {
  const [secondsReloj, setSecondsReloj] = useState(0);

  
  useEffect(() => {
    
    let interval = setInterval(() => {
        // let hour = new Date()
        // let seconds = `${hour.getSeconds()}`
        // if(seconds.length === 1){
        //     seconds = '0' + seconds
        // }
        // setSecondsReloj(seconds)
        //let seconds = secondsReloj + 1

        setSecondsReloj(secondsReloj + 1)
        
        if(secondsReloj === 59){
            setSecondsReloj(0)
        }
        console.log(secondsReloj)
    }, 1000);
    //console.log(secondsReloj)
    return () => clearInterval(interval);
  });
  return <div>{secondsReloj}</div>;
};

export default Seconds;
