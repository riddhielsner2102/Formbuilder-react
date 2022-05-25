import React from "react";
import "./App.css";
import Login from "./components/pages/formbuilder-login/login/login";
import Sidebar from "./components/pages/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Extra from "./components/pages/Extra";
import Navbar from "./components/pages/Navbar/Navbar";
import Checklists from "./components/pages/Sub-System/CMSS/Masters/Checklists/Checklists";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/maincontent" element={<Sidebar />}>
            <Route index element={<Navbar />} />
            <Route path="extra" element={<Extra />} />
            <Route path="checklist" element={<Checklists />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
