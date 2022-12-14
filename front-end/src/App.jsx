import React from "react";
import AppRoutes from './AppRoutes';
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

function App() {
  let navigate = useNavigate();
  return (
    <>
    <Navigation/>
      <div className="d-flex justify-content-center p-2 m-3">
        <AppRoutes></AppRoutes>
      </div>
    </>
  );
}

export default App;
