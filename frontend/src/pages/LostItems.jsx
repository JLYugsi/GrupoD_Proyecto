import React from 'react'
import { Link } from 'react-router-dom'
import { lostItems } from '../mocks/mockData'

function Badge({status}){
  const map = {FOUND:'bg-yellow-200 text-yellow-800',CLAIMED:'bg-blue-200 text-blue-800',DELIVERED:'bg-green-200 text-green-800'}
  return <span className={`px-2 py-1 rounded ${map[status]||'bg-gray-200'}`}>{status}</span>
}

export default function LostItems(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Objetos perdidos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lostItems.map(item=> (
          <div key={item.id} className="bg-white rounded shadow overflow-hidden">
            <img src={item.image_url} alt="" className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold">{item.name}</div>
                <Badge status={item.status} />
              </div>
              <div className="text-sm text-gray-500 mb-4">{item.category} • {item.location_found}</div>
              <div className="flex gap-2">
                <Link to={`/lost/${item.id}`} className="px-3 py-2 bg-gray-100 rounded">Ver</Link>
                <Link to={`/claim/create/${item.id}`} className="px-3 py-2 bg-blue-600 text-white rounded">Reclamar</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
