import React from "react"
import "./index.css"
import { Route, Routes} from "react-router-dom"
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Profile from "./routes/Profile";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>

  );
}

export default App;
