import React from 'react'

const useDisplayInfo = (data,detail) => {
  return (
    <>
    {/* to display hero info */}
    <div className='w-[50%] flex justify-center items-center py-[50px]'>

            <div className=' w-[95%] px-[20px] justify-center flex'>
            <div className='space-y-6'>
            <p className='text-xl tracking-widest text-red-500 font-bold capitalize'>{detail}</p>
                {
                    Object?.keys(data[detail])?.map((key,index) => {

                        return (
                            <p key={index} className="space-x-2 text-[13px]"><span className='text-gray-500 font-bold'>{key.toLocaleUpperCase()}</span> <span>:</span> <span className='capitalize'>{data[detail][key] + " . "}</span></p>
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