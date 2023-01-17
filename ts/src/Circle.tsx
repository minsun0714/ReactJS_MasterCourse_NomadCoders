import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default" }: CircleProps) {
  const [counter, setCounter] = useState<boolean | string>(false);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "teal"}>
      {text}
    </Container>
  );
}
export default Circle;