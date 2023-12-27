import React from 'react'
import { Navbar , Home , Project , Skills , Education , Footer} from "./components"


const App = () => {
  return (
     <div className="bg-slate-800 w-full">
      <Navbar/>
      <Home/>
      <Project/>
      <Skills/>
      <Education/>
      <Footer/>

      <h1>hlw</h1>
     </div>
  )
}

export default App