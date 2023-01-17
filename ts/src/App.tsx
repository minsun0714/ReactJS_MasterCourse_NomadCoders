import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Button from "./Button";

const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.bgColor};
`;

interface H1Props {
  text: string;
}

const H1 = styled.h1<H1Props>`
  color: ${(prop) => prop.theme.textColor};
`;

interface DummyProps {
  text?: string;
  active?: boolean;
}

function Dummy({ text = "안녕하시렵니까", active = false }: DummyProps) {
  return (
    <div>
      <H1 text={text}>{text}</H1>
    </div>
  );
}

function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {};
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue("");
  };
  return (
    <Wrapper>
      <Dummy active={true} text='Minsun' />
      <button onClick={onclick}>click me</button>
      <Button bgColor='violet' />
      <Circle bgColor='yellow' />
      <Circle bgColor='tomato' text='hihi' />
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type='text'
          placeholder='username'
        ></input>
        <button>Log in</button>
      </form>
    </Wrapper>
  );
}

export default App;
