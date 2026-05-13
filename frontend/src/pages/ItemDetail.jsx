import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { lostItems } from '../mocks/mockData'

export default function ItemDetail(){
  const { id } = useParams()
  const item = lostItems.find(i=>i.id===Number(id))
  if(!item) return <div>Item not found</div>
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex gap-6">
        <img src={item.image_url} className="w-80 h-60 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <div className="text-sm text-gray-500 mb-2">{item.category} • {item.location_found}</div>
          <p className="mb-4">{item.description}</p>
          <div className="flex gap-2">
            <Link to={`/claim/create/${item.id}`} className="px-4 py-2 bg-blue-600 text-white rounded">Reclamar</Link>
            <span className="px-3 py-2 bg-gray-100 rounded">{item.status}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
