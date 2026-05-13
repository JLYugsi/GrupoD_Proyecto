import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import LostItems from './pages/LostItems'
import ItemDetail from './pages/ItemDetail'
import CreateClaim from './pages/CreateClaim'
import ClaimsPanel from './pages/ClaimsPanel'

export default function App(){
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Dashboard/>} />
        <Route path="lost" element={<LostItems/>} />
        <Route path="lost/:id" element={<ItemDetail/>} />
        <Route path="claim/create/:itemId" element={<CreateClaim/>} />
        <Route path="claims" element={<ClaimsPanel/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
