import React from 'react'


const Eventcard = (props) => {
  return (
    <div className='flex relative h-screen w-screen shrink-0 bg-black ' >
        <div className='h-80 w-80 rotate-345 bg-black bottom-8 left-32 absolute '>
            <img className='rounded-4xl' src={props.img1} alt="" />
            <div className='text-4xl text-white w-full text-center '>{props.text1}</div>

        </div>
        <div className='h-100 w-125 bg-black top-16 right-32 rotate-3  absolute rounded-4xl'>
            <img className='rounded-4xl' src={props.img2} alt="" />
            <div className='text-4xl text-white w-full text-center  '>{props.text2}</div>
        </div>
        <div></div>
    </div>
  )
}

export default Eventcard