import React from "react";
import "./App.css";
import Login from "./components/pages/formbuilder-login/login/login";
import Sidebar from "./components/pages/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Extra from "./components/pages/Extra";
import Permissiondashboard from "./components/pages/permission-setting/permission-dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/maincontent" element={<Sidebar />}>
            <Route index element={<Permissiondashboard />} />
            <Route path="extra" element={<Extra />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
