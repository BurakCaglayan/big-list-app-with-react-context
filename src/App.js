import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles/main.scss";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
