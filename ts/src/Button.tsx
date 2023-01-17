import React, { useState } from "react";
import styled from "styled-components";

interface Buttonprops {
  bgColor: string;
}

const Button = styled.button<Buttonprops>`
  width: 100px;
  height: 50px;
  background-color: ${(prop) => prop.theme.btnColor};
  border: 0px;
  color: ${(prop) => prop.theme.textColor};
`;

interface Btnprops {
  bgColor: string;
}

function Btn({ bgColor }: Btnprops) {
  const [count, setCount] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCount(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCount("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input placeholder='practice' value={count} onChange={onChange}></input>
      <Button bgColor={bgColor}>hi</Button>
    </form>
  );
}
export default Btn;
