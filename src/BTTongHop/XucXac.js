import React, { Fragment } from "react";

export default function XucXac(props) {
  const { xucXac } = props;
  return (
    <Fragment>
      <div className="scene">
        <div className="cube">
          <img
            className="ml-3 cube__face front"
            style={{ width: "50px" }}
            src={xucXac.hinhAnh}
          />
          <img
            className=" ml-3 cube__face back"
            style={{ width: "50px" }}
            src="./img/gameBauCua/bau.png"
          />
          <img
            className=" ml-3 cube__face left"
            style={{ width: "50px" }}
            src="./img/gameBauCua/cua.png"
          />

          <img
            className=" ml-3 cube__face right"
            style={{ width: "50px" }}
            src="./img/gameBauCua/tom.png"
          />

          <img
            className="ml-3 cube__face top"
            style={{ width: "50px" }}
            src="./img/gameBauCua/ca.png"
          />
          
          <img
            className="ml-3 cube__face bottom"
            style={{ width: "50px" }}
            src="./img/gameBauCua/nai.png"
          />
         
        </div>
      </div>
    </Fragment>
  );
}
