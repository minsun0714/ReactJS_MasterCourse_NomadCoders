import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  padding: 10px;
  margin: 0px;
`;
const H1 = styled.h1`
  color: violet;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <TitleWrapper>
        <H1>To Do List ✅</H1>
      </TitleWrapper>
      <CreateToDo />

      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
