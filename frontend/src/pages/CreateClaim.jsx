import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { lostItems } from '../mocks/mockData'

export default function CreateClaim(){
  const { itemId } = useParams()
  const item = lostItems.find(i=>i.id===Number(itemId))
  const [observation, setObservation] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    // here we would post claim to API; for now mock
    alert('Reclamo creado (mock)')
    navigate('/claims')
  }
  if(!item) return <div>Item not found</div>
  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl">
      <h2 className="text-xl font-bold mb-4">Crear reclamo para: {item.name}</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Observación
          <textarea value={observation} onChange={e=>setObservation(e.target.value)} required className="w-full mt-1 p-2 border rounded" />
        </label>
        <div className="flex gap-2 mt-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded">Enviar reclamo</button>
          <button type="button" onClick={()=>navigate(-1)} className="px-4 py-2 bg-gray-100 rounded">Cancelar</button>
        </div>
      </form>
    </div>
  )
}
