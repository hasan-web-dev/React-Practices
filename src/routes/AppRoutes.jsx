import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Tasks from '../pages/Tasks'
import TaskDetails from '../pages/TaskDetails'
import TaskEdit from '../pages/TaskEdit'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Unauthorized from '../pages/Unauthorized'
import NotFound from '../pages/NotFound'
import DashboardLayout from '../components/layout/DashboardLayout'

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<DashboardLayout />} />
        <Route index element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        <Route path="/tasks/:taskId/edit" element={<TaskEdit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
  )
}

export default AppRoutes
