import React from "react";
import XucXac from "./XucXac";
import { useSelector,useDispatch } from "react-redux";
export default function DSXucXac() {
  const dispatch = useDispatch()
 
  const mangXucXac = useSelector((state) => state.gameBauCuaReducer.mangXucXac);

  return (
    <div className="mt5 ml-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: 150, paddingRight: 25 }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginLeft: 100 }}>
            <XucXac xucXac={mangXucXac[0]} />
          </div>
        </div>
        <div className="row " style={{ marginTop: -50}}>
          <div className="col-6 text-right">
            <XucXac xucXac={mangXucXac[1]} />
          </div>
          <div className="col-4 text-right" >
            <XucXac xucXac={mangXucXac[2]} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: 120 }} className="mt-3 ">
        <button onClick={()=>{
          dispatch({
            type: 'PLAY_GAME_BAU_CUA',
            
          })
        }} style={{ fontSize: 25 }} className="btn btn-success ">
          Xốc
        </button>
      </div>
    </div>
  );
}
