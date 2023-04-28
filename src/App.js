import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Popup from "./components/Popup";
import Toast from "./components/Toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/modal"} element={<Modal />} />
          <Route path={"/popup"} element={<Popup />} />
          <Route path={"/toast"} element={<Toast />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
