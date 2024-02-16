// import Switch from 'react-switch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoContainer" element={<TodoContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
