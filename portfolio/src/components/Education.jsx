import React from 'react'

const Education = () => {
  return (
    <div className='my-4 p-3 flex flex-col items-center'>
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-slate-600 text-4xl font-bold">Education</h1>
        <div className="w-32 border border-cyan-500 mt-3 rounded-md"></div>
      </div>
      <Helper/>
      <Helper/>
      <Helper/>

    </div>
  )
}

const Helper = () => {
  return (
    <div className='border border-cyan-200 rounded-md p-2 my-3 max-w-[600px]'>
         <div className='flex'>
          <div className='w-16 h-16 rounded-md overflow-hidden'>

            <img src="https://imgs.search.brave.com/lGt2ebPPuV0jm2UWSfQtgCUqZapYtRad-9yxHiZSYOA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bWNldGJoYi5uZXQv/aW1hZ2VzL29yZ2Fu/aXphdGlvbi1sb2dv/L2FpY3RlLnBuZw" alt="" />
          </div>
          <div className='px-1'>
             <h2 className='text-slate-400 font-semibold'>Murshidabad College of Engineering and Technology,West Bengal</h2>
             <p className='text-slate-500 text-sm font-semibold'>Bachelor of Technology-BTech Computer Science and Engineering</p>
             <p className='text-slate-700 text-sm font-semibold'>Oct 2020 - june 2024</p>
          </div>
         </div>
          <h3 className='font-bold text-slate-500 my-3'>Grade: <span className='text-slate-700 font-normal'>8.71 CGPA</span></h3>
          <p className='text-slate-500 mb-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus suscipit itaque explicabo consectetur incidunt beatae. Veritatis quisquam veniam harum reiciendis ipsam labore dignissimos rerum cumque?</p>
    </div>
  )
}

export default Education