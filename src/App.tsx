import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
