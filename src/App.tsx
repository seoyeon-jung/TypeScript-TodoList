import React from "react";
import "./App.css";
import Todos from "./components/features/Todos";
import Header from "./components/UI/Header";

function App() {
  return (
    <>
      <Header />
      <Todos />
    </>
  );
}

export default App;
