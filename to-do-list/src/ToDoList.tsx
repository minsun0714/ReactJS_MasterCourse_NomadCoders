import React, { useState } from "react";
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

function ToDoList() {
  const { register, watch, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(watch());
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...(register("Email"), { required: true })}
          required
          placeholder='Email'
        />{" "}
        <input
          {...(register("firstName"), { required: true })}
          placeholder='firstName'
        />{" "}
        <input
          {...(register("lastName"), { required: true })}
          placeholder='lastName'
        />{" "}
        <input
          {...(register("userName"), { required: true, minLength: 10 })}
          placeholder='userName'
        />{" "}
        <input
          {...(register("pw"), { required: true, minLength: 5 })}
          placeholder='pw'
        />
        <input
          {...(register("pwConfirmation"), { required: true, minLength: 5 })}
          placeholder='pwConfirmation'
        />{" "}
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
