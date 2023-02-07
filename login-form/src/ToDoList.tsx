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
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder='Email' />
        <input {...register("first Name")} placeholder='First Name' />
        <input {...register("last Name")} placeholder='Last Name' />
        <input {...register("username")} placeholder='Username' />
        <input {...register("password")} placeholder='Password' />
        <input {...register("password1")} placeholder='Password1' />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
