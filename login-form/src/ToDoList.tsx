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

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("Email", { required: true })} placeholder='Email' />
        <input
          {...register("first Name", { required: true })}
          placeholder='First Name'
        />
        <input
          {...register("last Name", { required: true })}
          placeholder='Last Name'
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder='Username'
        />
        <input
          {...register("password", {
            required: "password is required",
            minLength: { value: 5, message: "too short" },
          })}
          placeholder='Password'
        />
        <input
          {...register("password1", {
            required: true,
            minLength: { value: 5, message: "too short" },
          })}
          placeholder='Password1'
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
