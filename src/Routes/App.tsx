import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import NewsList from "../components/NewsList";


function App() {
  return (
    <BrowserRouter basename="/News-App">
      <Header />
      <Routes>
        <Route path="/" element={<NewsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
