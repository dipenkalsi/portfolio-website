import React from 'react'

const Badge = ({label}) => {
  return (
    <div className='px-3 py-2 text-xs bg-black text-white rounded'>
      {label}
    </div>
  )
}

export default Badge
