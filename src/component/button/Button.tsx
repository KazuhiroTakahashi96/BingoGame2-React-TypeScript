import React from "react";

type Props = {
  text: string;
  onClick: any;
};

const Button = (props: Props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default Button;
