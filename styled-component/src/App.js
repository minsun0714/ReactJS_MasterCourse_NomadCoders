import styled, { keyframes } from "styled-components";
import style from "./App.module.css";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
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
      background-color: skyblue;
    }
`;

const Emoji = styled.span`
  font-size: 75px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;
  ${Emoji} {
    font-size: 50px;
    &:hover {
      font-size: 200px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>우주에 오신 것을 환영쓰</Title>
      <Box>
        <Emoji as='p'>🪐</Emoji>
      </Box>
      <Emoji as='p'>🪐</Emoji>
    </Wrapper>
  );
}

export default App;
