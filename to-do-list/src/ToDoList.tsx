import { useForm } from "react-hook-form";
import styled from "styled-components";

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

interface IForm {
  toDo: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log(data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <TitleWrapper>
        <H1>To Do List ✅</H1>
      </TitleWrapper>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder='write a to do'
        />{" "}
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
}
export default ToDoList;
