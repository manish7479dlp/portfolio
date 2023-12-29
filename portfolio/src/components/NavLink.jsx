import React from 'react'

const NavLink = () => {
  return (
    // <ul className='sm:flex md:w-4/6  w-3/6 hidden justify-evenly text-slate-400 font-semibold'>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //     <li>Skills</li>
    //     <li>Project</li>
    // </ul>
        <GitRepoBtn/>
  )
}

const GitRepoBtn = () => {
  return(
    <a className='px-2 py-1 bg-gradient-to-r from-slate-300 to-slate-700 text-slate-950 font-semibold rounded-md cursor-pointer transition-all duration-400 ease-in-out hover:bg-gradient-to-r hover:to-slate-400 hover:from-slate-700' href='https://github.com/manish7479dlp' target='_blank'>Github Profile</a>
  )
}

export default NavLink