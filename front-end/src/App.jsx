import React from "react";
import AppRoutes from './AppRoutes';
import { useNavigate } from "react-router-dom";
function App() {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {navigate(-1)}}>Back</button>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
