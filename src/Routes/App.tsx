import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import NewsList from "../components/NewsList";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<NewsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
