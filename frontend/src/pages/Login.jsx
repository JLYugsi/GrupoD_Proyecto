import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    // mock auth
    navigate('/')
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl mb-4">Iniciar sesión</h2>
        <label className="block mb-2">Email
          <input required type="email" className="w-full mt-1 p-2 border rounded" />
        </label>
        <label className="block mb-4">Password
          <input required type="password" className="w-full mt-1 p-2 border rounded" />
        </label>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  )
}
