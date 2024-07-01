import React from "react";

const ButtonUI = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonUI;
