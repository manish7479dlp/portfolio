import React from 'react'
import Logo from './Logo'
import NavLink from './NavLink'

const NavBar = () => {
  return (
    <div className='w-full bg-slate-500 sm:bg-transparent  h-24 mx-auto px-4 flex items-center justify-between text-white '>
      <Logo/>
      <NavLink/>
      
    </div>
  )
}



export default NavBar