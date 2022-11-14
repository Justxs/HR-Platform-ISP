import { Outlet, Navigate } from 'react-router-dom'

function AppRoute({ condition }) {
  return condition ? <Outlet /> : <Navigate to={"/dashboard"} />;
}

export default AppRoute;