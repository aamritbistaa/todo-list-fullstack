import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Todo from "./Pages/Todo";
import Logout from "./Pages/Logout";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
