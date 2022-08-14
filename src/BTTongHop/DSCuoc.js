import React from 'react'
import QuanCuoc from './QuanCuoc'
import { useSelector } from 'react-redux'
export default function DSCuoc(props) {


    const dsCuoc = useSelector((state) => state.gameBauCuaReducer.dsCuoc);
    //console.log(dsCuoc)
    const  renderDSCuoc = () =>{
        return dsCuoc.map((item,index) => {
           return  <div className="col-4" key={index}>
              <QuanCuoc quanCuoc ={item}/>
            </div>;
        })
    }
    return (
        <div className="row mt-2">
           {renderDSCuoc()}
        </div>
    )
}
