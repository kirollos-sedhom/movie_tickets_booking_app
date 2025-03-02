import React from 'react'

const Booking = () => {
  return (
    <div className='h-screen flex flex-col gap-4 items-center justify-center bg-slate-800 text-white'>
        <h1>اختار المعاد المناسب</h1>
        <div className='dates flex flex-wrap w-full gap-4 items-center justify-center '>

        <Slot date="الخميس 24/4" time="العرض الأول 6 مساءّ" />
        <Slot date="الخميس 24/4" time="العرض الثاني 8:30 مساءّ" />
        <Slot date="الجمعة 25/4" time="العرض الأول 6 مساءّ" />
        <Slot date="الجمعة 25/4" time="العرض الثاني 8:30 مساءّ" />

           
        </div>
    </div>
  )
}

const Slot= (props)=>{
    return(
        <div className='text-center border-2 rounded-xl p-4 flex flex-col gap-2 bg-slate-500 w-48 h-28'>
        <p>{props.date}</p>
        <p>{props.time}</p>
    </div>
    )
}

export default Booking
