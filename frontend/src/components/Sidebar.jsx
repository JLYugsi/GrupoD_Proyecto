import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = [
  {to:'/', label:'Dashboard'},
  {to:'/lost', label:'Lost Items'},
  {to:'/claims', label:'Claims'}
]

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 font-bold text-xl">CampusLost</div>
      <nav className="p-4 space-y-2">
        {nav.map(n => (
          <NavLink key={n.to} to={n.to} className={({isActive})=>isActive? 'block p-2 rounded bg-blue-50':'block p-2 rounded hover:bg-gray-100'}>{n.label}</NavLink>
        ))}
      </nav>
    </aside>
  )
}
