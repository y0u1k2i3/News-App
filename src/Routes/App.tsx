import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<NewsList />} />
    //   </Routes>
    // </BrowserRouter>

    // <div>
    //   <h1>Hello World</h1>
    // </div>

    <div>
      <header><h1>自己紹介</h1></header>
      <h2>Toiです</h2>
    </div>
  );
}

export default App;
