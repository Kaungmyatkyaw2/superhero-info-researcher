import React from 'react'

const ImageContainer = ({data}) => {
  return (
    <>
    <div className='lg:w-[50%] w-[100%] flex justify-center py-[50px]'>
            <img src={data.image.url} className="lg:w-[70%] md:w-[60%] w-[88%] sm:h-[400px] h-[430px] object-cover rounded-lg" alt="" />
    </div>
    </>
  )
}

export default ImageContainer