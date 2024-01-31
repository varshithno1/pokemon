'use client'
import React, { useEffect, useState } from 'react'

function page() {

  let id;
  // const [message, setMessage] = useState("Loading");
  const validate = (e)=> {
    e.preventDefault();
    let inp = document.querySelector("#inp");
    let val = inp.value;
    // console.log(inp.value);
    let res;
    
    console.log(localStorage.getItem(val));
    // if(localStorage.getItem(val)){
    //   console.dir(localStorage.getItem(val))
    // }else{
    //   fetch(`http://localhost:9000/${val}`).then(
    //     response => response.json()
    //     ).then(
    //       data => {
    //       res = data;
    //       localStorage.setItem(val, res);
    //       console.dir(data);
    //     }
    //   )
      fetch(`http://localhost:9000/${val}`).then(
        response => response.json()
        ).then(
          data => {
          console.dir(data);
          res = data;
          localStorage.setItem(val, { res });
        }
      )
    // }
  } 
  // useEffect(() => {
  //   fetch("http://localhost:9000/").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setMessage(data.forms[0].name);
  //     }
  //   )
  // }, [])


  return (
    <div>
      <input type="number" title="pokemon" id='inp' placeholder='enter name or id'/>
      <button onClick={validate}>Enter</button>
      {/* <div>{message}</div> */}
    </div>
  )
}

export default page