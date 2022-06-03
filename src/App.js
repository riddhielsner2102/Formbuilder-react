import React from "react";
import "./App.css";
import Login from "./components/pages/formbuilder-login/login/login";
import Sidebar from "./components/ReusableComp/Sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/ReusableComp/Navbar/Navbar";
import Checklists from "./components/pages/Sub-System/CMSS/Masters/Checklists/Checklists";
import PermissionTemplate from "./components/pages/Admin/PermissionSettings/PermissionTemplate";
import GMDashBoard from "./components/pages/Sub-System/CMSS/Masters/General_Item_Dashboard/GMDashBoard";
import ItemRepo from "./components/pages/Sub-System/CMSS/Masters/ItemRepo/ItemRepo";
import Field from "./components/pages/Sub-System/CMSS/Masters/Fields/Field";
import ReasonCode from "./components/pages/Sub-System/CMSS/Masters/Outcome/ReasonCode/ReasonCode";
import TestPage from "./components/pages/Sub-System/CMSS/Masters/Checklists/TestPage/TestPage";
import DdCpy from "./components/pages/Sub-System/CMSS/Masters/General_Item_Dashboard/ListItem/DdCpy";
import Rating from "./components/pages/Sub-System/CMSS/Masters/Rating/Rating";
import ListReasonCode from "./components/pages/Sub-System/CMSS/Masters/Outcome/ReasonCode/ListReasoncode/ListReasonCode";

const App = () => {
  const userId = sessionStorage.getItem("UserID");
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
            <Route path="item" element={<ItemRepo />} />
            <Route path="master-checklist" element={<Checklists />} />
            <Route path="master-checklist-testpage" element={<TestPage />} />
            <Route path="gmdashboard" element={<GMDashBoard />} />
            <Route path="DdCpy" element={<DdCpy />} />
            <Route
              path="evaluator/master-reasoncode"
              element={<ReasonCode />}
            />
             <Route
              path="master-outputfield"
              element={<Field />}
            />
            <Route
              path="master-assessmenttype"
              element={<Rating />}/>
            <Route
              path="evaluator/master-reasoncode/list"
              element={<ListReasonCode />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
