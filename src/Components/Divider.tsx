
import React from 'react'
interface WrapperProps {
    children: React.ReactNode;
  }

const Divider = ({ children }: WrapperProps) => {
  return (
    <div className='grid grid-cols-2 h-screen'>
      <div className='bg-white'></div>
      <div className='bg-green-500'>{children}</div>
    </div>
  )
}

export default Divider
