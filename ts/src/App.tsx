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
  return (
    <div>
      <form>
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
