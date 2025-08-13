// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
// import ProtectedRoute from "./ProtectedRoute";
import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import { useTheme } from "./Component/ThemeProvider";
import ColorSkin from "./Component/ColorSkin";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <Header />
      <ColorSkin />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
