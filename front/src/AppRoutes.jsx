import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

import DashBoardPage from './pages/DashBoardPage'
import CreateAccountPage from './pages/CreateAccountPage'
import AccountPage from './pages/AccountPage'
import UploadCVPage from './pages/UploadCVPage'
import ImportData from './pages/ImportData'
import ChangePasswordPage from './pages/ChangePasswordPage'
import EditAccountPage from './pages/EditAccountPage'
import CommentPage from './pages/CommentPage'
import ApplicationListPage from './pages/ApplicationListPage'
import JobAdPage from './pages/JobAdPage'
import JobOfferPage from './pages/JobOfferPage'
import LogoutPage from './pages/LogoutPage'
import JobOfferCreate from './pages/JobOfferCreate'

function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<CreateAccountPage/>} />
        <Route path="/logout" element={<LogoutPage/>} />

        <Route path="/dashboard" element={<DashBoardPage/>} />
        <Route path="/comment" element={<CommentPage/>} />
        <Route path="/applications" element={<ApplicationListPage/>} />

        <Route path="/jobsad" element={<JobAdPage/>} />
        <Route path="/jobsad/id" element={<JobOfferPage/>} />
        <Route path="/createAccount" element={<CreateAccountPage/>}></Route>
        <Route path="/job" element={<JobAdPage/>} />
        <Route path="/jobOffer" element={<JobOfferPage/>} />
        <Route path="/job/create" element={<JobOfferCreate/>} />
        <Route path="/account" element={<AccountPage/>}></Route>
        <Route path="/account/CV" element={<UploadCVPage/>}></Route>
        <Route path="/account/import" element={<ImportData/>}></Route>
        <Route path="/account/passwordReset" element={<ChangePasswordPage/>}></Route>
        <Route path="/account/edit" element={<EditAccountPage/>}></Route>

        <Route path="*" element={<Navigate to ={"/"}/>} />
    </Routes>
    </>
  );
}

export default AppRoutes