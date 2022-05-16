import React from "react";

type Props = {
  text: string;
  onClick: any;
  style: boolean;
};

const btnStyle = {
  width: "120px",
  height: "30px",
  fontSize: "16px",
  margin: "5px",
  border: "1px",
  borderRadius: "5px",
  cursor: "pointer",
};

const hideStyle = {
  display: "none",
};

const Button = (props: Props) => {
  return (
    <button style={props.style ? hideStyle : btnStyle} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
