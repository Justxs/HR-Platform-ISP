import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <div>
        <Navigation/>
        <main className="d-flex justify-content-center p-2 m-3">
            <Outlet/>
        </main>
    </div>
  )
}
export default Layout