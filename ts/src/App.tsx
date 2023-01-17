import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Button from "./Button";

const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.bgColor};
`;

function App() {
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
