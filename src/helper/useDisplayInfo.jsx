import React from 'react'

const useDisplayInfo = (data,detail) => {

    console.log(data)
  return (
    <>
    {/* to display hero info */}
    <div className='lg:w-[50%] w-[100%] flex items-center py-[50px]'>

            <div className=' w-[95%] lg:px-[20px] sm:px-[40px] px-[10px] lg:justify-center justify-start flex'>
            <div className='space-y-6'>
            <p className='text-xl tracking-widest text-red-500 font-bold capitalize'>{detail}</p>
                {
                    Object?.keys(data[detail])?.map((key,index) => {

                        return (
                            <p key={index} className="space-x-2 text-[13px]"><span className='text-gray-500 font-bold'>{key.toLocaleUpperCase()}</span> <span>:</span> 
                            <span className='capitalize'>
                            {(data[detail][key] == '-') ? 'No data found' : data[detail][key]}
                            </span>
                            </p>
                            
                        )

                    })
                }
            </div>
            </div>

    </div>
    </>
  )
}

export default useDisplayInfo