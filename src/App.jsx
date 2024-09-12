import React from "react";
import Navbar from "./Pages/components/Navbar";
import AppRouter from "./Router/AppRouter";
import Home from "./Pages/MainPages/Home";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <> 
        <AppRouter />
    </>
  );
};

export default App;
