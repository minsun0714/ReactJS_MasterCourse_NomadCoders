import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const [toDoError, setTodoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setTodoError("write more than 10");
//     }
//     setTodoError("");
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder='Write a to do' />
//         <button>Add</button>
//         {toDoError}
//       </form>
//     </div>
//   );
// }

interface IFormData {
  Email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  pwConfirmation: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      Email: "@naver.com",
    },
  });
  const onValid = (data: IFormData) => {
    if (data.password !== data.pwConfirmation) {
      return setError("pwConfirmation", {
        message: "password and pwConfirmation are different",
      });
    }
    setError(
      "extraError",
      { message: "Server offline." },
      { shouldFocus: true }
    );
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "네이버 메일을 올바르게 입력하세요",
            },
          })}
          placeholder='Email'
        />{" "}
        <span>{errors?.Email?.message}</span>
        <input
          {...register("firstName", { required: "Write your first name" })}
          placeholder='firstName'
        />{" "}
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Write your last name" })}
          placeholder='lastName'
        />{" "}
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", {
            required: "Write your user name",
            minLength: { value: 10, message: "username is too short" },
          })}
          placeholder='userName'
        />{" "}
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", {
            required: "password is required",
            minLength: { value: 5, message: "Your password is too short" },
          })}
          placeholder='password'
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("pwConfirmation", {
            required: "password is required",
            minLength: { value: 5, message: "Your password is too short" },
          })}
          placeholder='pwConfirmation'
        />{" "}
        <span>{errors?.pwConfirmation?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
export default ToDoList;
