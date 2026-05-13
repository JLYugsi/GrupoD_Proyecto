import React from 'react'
import { lostItems, claims } from '../mocks/mockData'

function StatCard({title, value}){
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}

export default function Dashboard(){
  const totalFound = lostItems.filter(i=>i.status==='FOUND').length
  const pendingClaims = claims.filter(c=>c.status==='PENDING').length
  const delivered = lostItems.filter(i=>i.status==='DELIVERED').length
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Objetos encontrados" value={totalFound} />
        <StatCard title="Reclamos pendientes" value={pendingClaims} />
        <StatCard title="Objetos entregados" value={delivered} />
      </div>
    </div>
  )
}
