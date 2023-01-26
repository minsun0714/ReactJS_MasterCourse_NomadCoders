import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

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

const Input = styled.input`
  background-color: white;
`;

const Btn = styled.button`
  background-color: greenyellow;
  border: none;
  border-radius: 50px; ;
`;

interface IForm {
  toDo: string;
}

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      ...oldToDos,
      { text: toDo, id: Date.now(), category: "TO_DO" },
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <TitleWrapper>
        <H1>To Do List ✅</H1>
      </TitleWrapper>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder='write a to do'
        />{" "}
        <Btn>+</Btn>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
