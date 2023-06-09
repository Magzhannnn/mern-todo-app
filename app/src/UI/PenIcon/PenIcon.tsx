import React from "react";
import { useDispatch } from "react-redux";
import { ModalActionTypes } from "../../types/modal";

const PenIcon = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="SvgjsSvg1001"
        width="35"
        height="35"
        version="1.1"
        onClick={() => dispatch({ type: ModalActionTypes.OPEN_MODAL })}
      >
        <defs id="SvgjsDefs1002" />
        <g id="SvgjsG1008">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
          >
            <path
              d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
              fill="#f90606"
            />
          </svg>
        </g>
      </svg>
    </div>
  );
};

export default PenIcon;
