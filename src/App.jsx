import { StrictMode } from "react";
import Header from "./components/header";
import Todo from "./components/input";

export default function App() {
  return (
    <StrictMode>
      <div id="todoapp">
        <Header />
        <Todo />
      </div>
    </StrictMode>
  );
}
