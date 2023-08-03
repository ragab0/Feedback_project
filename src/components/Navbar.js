import Link from 'next/link'
import React from 'react'

const links = [
  {name: "feedback", desc: "route_handlers"},
  {name: "todos", desc: "api_routes"},
]

export default function Navbar() {
  return (
    <nav className=' bg-gray-100 bg-opacity-80 backdrop-blur supports-backdrop-blur:bg-white/95 py-6 sticky top-0 drop-shadow-sm z-10'>
      <ol type='i' className=' mx-auto max-w-3xl text-center grid justify-center gap-2 font-bold' >
        {
          links.map(({name, desc}, i) => {
            return (
              <li key={i}>
                <Link href={`/${name}`} 
                      className='uppercase font-bold hover:opacity-70'
                >
                  {i+1}. {name} <span className='text-[10px]'>{desc}</span>
                </Link>
              </li>)
            }
          )
        }
      </ol>
    </nav>
  )
}
