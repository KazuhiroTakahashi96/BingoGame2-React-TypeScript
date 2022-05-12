import React from "react";

type Props = {
  text: string;
};

const Button = (props: Props) => {
  return <button>{props.text}</button>;
};

export default Button;