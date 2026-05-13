import React from 'react'
import { claims, lostItems } from '../mocks/mockData'

function Badge({status}){
  const map = {PENDING:'bg-orange-200 text-orange-800',APPROVED:'bg-green-200 text-green-800',REJECTED:'bg-red-200 text-red-800'}
  return <span className={`px-2 py-1 rounded ${map[status]||'bg-gray-200'}`}>{status}</span>
}

export default function ClaimsPanel(){
  const handleAction = (id, action)=>{
    alert(`${action} claim ${id} (mock)`)
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Panel de Reclamos</h1>
      <div className="space-y-4">
        {claims.map(c=>{
          const item = lostItems.find(i=>i.id===c.item_id)
          return (
            <div key={c.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <div className="font-semibold">{item?.name || 'Objeto'}</div>
                <div className="text-sm text-gray-500">{c.observation}</div>
              </div>
              <div className="flex items-center gap-4">
                <Badge status={c.status} />
                <div>
                  <button onClick={()=>handleAction(c.id,'APPROVE')} className="px-3 py-1 bg-green-600 text-white rounded mr-2">Aprobar</button>
                  <button onClick={()=>handleAction(c.id,'REJECT')} className="px-3 py-1 bg-red-600 text-white rounded">Rechazar</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
