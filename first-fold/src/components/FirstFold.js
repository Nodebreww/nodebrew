import React, { useRef, useEffect } from "react";
import "../styles.css";
import { setupCursorAnimation } from "./cursorAnimation";


export default function FirstFold() {
  
   useEffect(() => {
    setupCursorAnimation();
  }, []);


  return (
    <div className="section">

      <div className="wrapper">
        <div className="header">
          <h1 className="h1">Stanbic CSA</h1>
          <h3 className="h3 text-center">
            Welcome to the OKay Inc.
            <br />
            Customer Service App
          </h3>
          <div className="downloads">
            <a href="/" className="button-icon button w-inline-block">
              <div className="text-block">Register</div>
            </a>
          </div>
    
      <img
        src="https://assets.website-files.com/5e8b5e18380eb29314b40327/5e8b5e18380eb266bbb40333_Group%2020.svg"
        alt=""
        className="headimg"
        id="img-1"
       
      />
     <img
     src="https://assets.website-files.com/5e8b5e18380eb29314b40327/5e8b5e18380eb22902b40339_Group%2028.svg"
     alt=""
     style={{
      position: "absolute",
      bottom: "0",
      right: "0",
    
     }}
     className="headimg_2"
     id="img-2"
      />


      </div>

      </div>
    </div>
  );
}
