import "./App.css";
import Footer from "./MyComponenets/Footer";
import Header from "./MyComponenets/Header";
import Todos from "./MyComponenets/Todos";
import AddTodo from "./MyComponenets/AddTodo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodos = (title, desc) => {
    console.log("I am adding this Todo", title, desc);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the Market right now",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the  mall right now",
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat right now",
    },
    {
      sno: 4,
      title: "Go to the ghatkoper",
      desc: "You need to go to the ghatkoperright now",
    },
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={AddTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
