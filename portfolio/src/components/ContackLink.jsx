import React from 'react'

const ContackLink = () => {
  return (
    <div className='mt-7'>
        <LinkIcon/>
        <LinkIcon/>
        <LinkIcon/>
        <LinkIcon/>

    </div>
  )
}

const LinkIcon = () => {
    return (
         <a href='#' className='px-4 py-2 mr-5 border border-cyan-500 rounded-[50%] shadow-2xl'>
            x
         </a>
    )
}

export default ContackLink