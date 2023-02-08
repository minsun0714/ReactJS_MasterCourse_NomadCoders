import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setValue] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     setValue(event.currentTarget.value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     return toDo.length < 10 ? setToDoError("too short!!") : setToDoError("");
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

interface IForm {
  Email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>({
    defaultValues: {
      Email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      return setError(
        "password1",
        {
          message: "Passwords are not the same",
        },
        {
          shouldFocus: true,
        }
      );
    }
    setValue("userName", "");
    // setError("extraError", { message: "Server Offline" });
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
            required: "Email required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only Naver Email",
            },
          })}
          placeholder='Email'
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register("firstName", {
            required: true,
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nico allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder='First Name'
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: false })}
          placeholder='Last Name'
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", {
            required: "usename required",
            minLength: { value: 10, message: "too short" },
          })}
          placeholder='Username'
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", {
            required: "password is required",
            minLength: { value: 5, message: "too short" },
          })}
          placeholder='Password'
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: true,
            minLength: { value: 5, message: "too short" },
          })}
          placeholder='Password1'
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
