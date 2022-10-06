import React, { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Searched } from '../App'
import Loader from "./Loader"

export const DataForBio = createContext();

const SearchDisplay = () => {

  const toInfo = useNavigate(); // to route to info

  const datas = useContext(Searched); // get data from app searched data

  return (
    (datas.loading) ? <Loader/> : (datas.final_data == undefined) ? <h1 className='text-gray-400 text-xl uppercase font-bold py-[100px] tracking-widest'>InValid Superhero</h1> : <div className='flex flex-wrap w-[100%]'>
    { datas?.final_data?.map((i,index) => {
      return (
        <div className='w-[33%] flex flex-col items-center space-y-3 justify-center mt-[40px]' key={index}>
           <img src={i.image.url} className='w-[60%] h-[250px] rounded object-cover hover:opacity-[0.6] duration-300 cursor-pointer active:ring-4 ring-orange-500' onClick={() => toInfo('/info',{state:i})}  alt="" />
           <div>
             <p className='text-sm font-bold uppercase tracking-widest'>{i.name}</p>
           </div>
        </div>
     )})}
   </div>
    
  )
}

export default React.memo(SearchDisplay)