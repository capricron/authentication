import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Navbar from "./pages/Navbar";
import Language from "./pages/Language";
import About from "./pages/About";
import Home from "./pages/Home"; 


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    // ...
  ]);
  return(
    <div className={""}>
      {routes}
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <div className="grid grid-cols-9 h-screen">
        <Language />
        <div className={'grid col-span-8 grid-rows-6 grid-flow-col'}>
          <Navbar />
          <App />
        </div>
      </div>
    </Router>
  );
};

export default AppWrapper;