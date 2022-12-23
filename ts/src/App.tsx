import React from "react";
import styled, { keyframes } from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
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
