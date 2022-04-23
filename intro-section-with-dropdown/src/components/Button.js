import React from 'react'

function Button({text}) {
  return (
    <button type="button" className="bg-black hover:bg-white text-white hover:text-black border border-black font-bold rounded-lg leading-none p-4">{text}</button>
  )
}

export default Button