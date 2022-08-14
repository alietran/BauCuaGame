import React from 'react'
import DSXucXac from './DSXucXac'
import DiemCuoc from './DiemCuoc'
import DSCuoc from './DSCuoc'
import './BTGameBauCua.css'
export default function GameBauCua(props) {
    return (
      <div id="gameBauCua" className="container-fluid ">        
       
      <DiemCuoc />
        <div className="row">
          <div className="col-8">
            <DSCuoc />
          </div>
          <div className="col-4">
          
            <DSXucXac />
          </div>
        </div>
      </div>
    );
}
