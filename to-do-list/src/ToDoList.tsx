import { useForm } from "react-hook-form";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder='write a to do'
        />{" "}
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
