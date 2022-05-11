import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
// import { renderRoutes } from './configs/routes'
function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          {/* {
            renderRoutes.map(([key, route]) => {
              return (

                <Route key={key} path={route.path} exact={route.exact} element={route.element} />
              )
            }
            )
          } */}
          {/* <Route path="*" element={<NotFound/>}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
         
        </Routes>

      </Router>
    </div>
  );
}

export default App;
