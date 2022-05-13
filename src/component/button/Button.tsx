import React from "react";

type Props = {
  text: string;
  onClick: any;
};

const style = {
  width: "120px",
  height: "30px",
  fontSize: "16px",
  margin: "5px",
  border: "1px",
  borderRadius: "5px",
};

const Button = (props: Props) => {
  return (
    <button style={style} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
