import React from "react";
import styled, { keyframes } from "styled-components";

function App() {
  const [value, setValue] = React.useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type='text'
          placeholder='username'
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
