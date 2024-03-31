import React from 'react'

const ServicesCard = (props) => {
  return (
    <>
      <div className=' w-full lg:w-1/4 p-5 shadow-[rgba(0,_20,_0,_0.24)_0px_3px_8px] rounded-lg'>
    <div className='space-y-4'>
        <h3 className='font-semibold text-xl pt-6'>{props.title}</h3>
        <div className="flex flex-row justify-center">
        <p className='text-sm pl-4 size-30'>{props.text}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default ServicesCard