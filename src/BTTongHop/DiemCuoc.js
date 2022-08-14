import React from "react";
import { useSelector,useDispatch } from "react-redux";
export default function DiemCuoc(props) {
  const dispatch = useDispatch();
  const tongDiem = useSelector(state => state.gameBauCuaReducer.tongDiem);
  return (
    <div>
      <h3 className=" mt-0 text-center display-4 text-success">Game Bầu Cua</h3>
      <div className="text-center mt-4">
        <span
          className="p-3 text-white bg-danger"
          style={{ borderRadius: "5%", fontSize: "20px" }}
        >
          Tiền thưởng:
          <span className="text-warning"> {tongDiem}$</span>
        </span>
      </div>
      <div className="text-center mt-4">
        <button onClick={() =>{
          dispatch({
            type: 'CHOI_LAI'
          })
        }}
          className="p-3 text-white btn-success"
          style={{ borderRadius: "5%", fontSize: "15px", border: "none" }}
        >
          Chơi lại
        </button>
      </div>
    </div>
  );
}
