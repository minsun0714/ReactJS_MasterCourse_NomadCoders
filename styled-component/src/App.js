import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotation = keyframes`
    0% {
      transform:rotate(0deg);
      border-radius: 0px;
      background-color: green;
    }
    50% {
      transform:rotate(360deg);
      border-radius: 100px;
      background-color: aliceblue;
    }
    100% {
      transform:rotate(0deg);
      border-radius: 0px;
      background-color: green;
    }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotation} 1s linear infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
