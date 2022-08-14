import React from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
export default function QuanCuoc(props) {
  const dispatch = useDispatch();
  const [propsUseSpringInCrease, setInCrease] = useSpring(() => {
    return {
      to: { scale: 1 },
      from: { scale: 0.5},
      reset: true,
    };
  });
  const [propsUseSpringDeCrease, setDeCrease] = useSpring(() => {
    return {
      to: { scale: 1 },
      from: { scale: 0.5},
      reset: true,
    };
  });
  const { quanCuoc } = props;

  return (
    <div className="mt-2 ">
      <img src={quanCuoc.hinhAnh} style={{ width: "200px" }} />
      <div
        className="bg-warning mt-1 p-2 text-center"
        style={{ width: "200px", height: "60px" }}
      >
        <animated.button
          style={{
            transform: propsUseSpringInCrease.scale.interpolate(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setInCrease({ scale: 0.75 });
            setInCrease({ scale: 1 });

            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: true,
            });
          }}
          className="btn btn-light mr-3"
        >
          <i className="fa fa-plus"></i>
        </animated.button>
        <span style={{ fontSize: 25 }} className="text-success">
          {quanCuoc.diemCuoc}
        </span>
        <animated.button
          style={{
            transform: propsUseSpringDeCrease.scale.interpolate(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setDeCrease({ scale: 0.75 });
            setDeCrease({ scale: 1 });
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="btn btn-light ml-3"
        >
          -
        </animated.button>
      </div>
    </div>
  );
}
