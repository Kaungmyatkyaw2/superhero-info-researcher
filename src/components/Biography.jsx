import React from 'react'
import { useLocation } from 'react-router-dom'
import useDisplayInfo from '../helper/useDisplayInfo';
import ImageContainer from './ImageContainer';



const Biography = () => {

    const data_from_search = useLocation().state;

   

    const BioTetxting = useDisplayInfo(data_from_search,"biography")
    const Power_stats = useDisplayInfo(data_from_search,"powerstats")
    const Appearance = useDisplayInfo(data_from_search,"appearance")
    const Work = useDisplayInfo(data_from_search,"work")
    const Connections = useDisplayInfo(data_from_search,"connections")

   



  return (
    <div className='w-full mt-[40px] flex flex-wrap justify-center'>

        {/* Image Container */}
        <ImageContainer data={data_from_search}/>


            {/* text Container */}
              {BioTetxting}
              {Power_stats}
              {Appearance}
              {Connections}
              {Work}
                        
    </div>
  )
}

export default Biography