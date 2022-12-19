import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

import DashBoardPage from '../pages/DashBoardPage'
import CreateAccountPage from '../pages/CreateAccountPage'
import AccountPage from '../pages/AccountPage'
import UploadCVPage from '../pages/UploadCVPage'
import ImportData from '../pages/ImportData'
import ChangePasswordPage from '../pages/ChangePasswordPage'
import EditAccountPage from '../pages/EditAccountPage'
import CommentPage from '../pages/CommentPage'
import ApplicationListPage from '../pages/ApplicationListPage'
import JobAdPage from '../pages/JobAdPage'
import JobOfferPage from '../pages/JobOfferPage'
import JobOfferCreate from '../pages/JobOfferCreate'
import Layout from '../components/Layout'
import Missing404 from '../pages/Missing404'
import RequireAuth from '../components/RequireAuth'
import DeleteAccountPage from '../pages/DeleteAccountPage'
function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>

          <Route path="" element={<HomePage/>}/>
          <Route path="login" element={<LoginPage/>} />
          <Route path="register" element={<CreateAccountPage/>} />

          {/*<Route element={<RequireAuth/>}>*/}
            <Route path="dashboard" element={<DashBoardPage/>}/>
            <Route path="account" element={<AccountPage/>}/>
            <Route path="account/CV" element={<UploadCVPage/>}/>
            <Route path="account/import" element={<ImportData/>}/>
            <Route path="account/passwordChange" element={<ChangePasswordPage/>}/>
            <Route path="account/edit" element={<EditAccountPage/>}/>
            <Route path="account/delete" element={<DeleteAccountPage/>}/>
            <Route path="jobsad" element={<JobAdPage/>} />
            <Route path="jobsad/id" element={<JobOfferPage/>} />
            <Route path="comment" element={<CommentPage/>} />
            <Route path="applications" element={<ApplicationListPage/>} />
            <Route path="jobOffer" element={<JobOfferPage/>} />
            <Route path="createAccount" element={<CreateAccountPage/>}/>
            <Route path="job" element={<JobAdPage/>} />
            <Route path="job/create" element={<JobOfferCreate/>} />
          {/*</Route>*/}

          <Route path="*" element={<Missing404/>} />
        </Route>
    </Routes>
  );
}

export default AppRoutes