import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      }
    </BrowserRouter>
  );
}

export default App;
