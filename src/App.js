import React from "react";
import "./App.css";
import Login from "./components/pages/formbuilder-login/login/login";
import Sidebar from "./components/pages/Sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/pages/Navbar/Navbar";
import Checklists from "./components/pages/Sub-System/CMSS/Masters/Checklists/Checklists";
import PermissionTemplate from "./components/pages/Admin/PermissionSettings/PermissionTemplate";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/pages/formbuilder-login/login" replace />}
          />
          <Route path="/pages/formbuilder-login/login" element={<Login />} />
          <Route
            path="/pages/formbuilder/permission-setting/permission-dashboard"
            element={<Sidebar />}
          >
            <Route index element={<PermissionTemplate />} />
            <Route index element={<Navbar />} />
            <Route path="checklist" element={<Checklists />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
