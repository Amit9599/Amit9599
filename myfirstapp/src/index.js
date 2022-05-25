import React from "react";
import ReactDom from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LogInPage from "./Components/LogInPage";
import SignUpForm from "./Components/SignUpForm";
// import LogInPage from "./Components/LogInPage";


var root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  <>
  <BrowserRouter>
  <Home/>
    <Routes>
      {/* <Route path="/" element={<Home/>}></Route> */}
      <Route path="/Login" element={<LogInPage/>}></Route>
      <Route path="/Signup" element={<SignUpForm/>}></Route>
    </Routes>
  </BrowserRouter>

  </> 

)