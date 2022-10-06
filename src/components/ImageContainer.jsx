import React from 'react'

const ImageContainer = ({data}) => {
  return (
    <>
    <div className='w-[50%] flex justify-center py-[50px]'>
            <img src={data.image.url} className="w-[70%] h-[400px] object-cover rounded-lg" alt="" />
    </div>
    </>
  )
}

export default ImageContainer