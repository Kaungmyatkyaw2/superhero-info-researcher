
import React,{createContext, useReducer, useState} from 'react'
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import Biography from './components/Biography';
import SearchDisplay from './components/SearchDisplay';

export const Searched = createContext();

// initial state for api fetching reducer
const initialState = 
  {
    loading:false,
    error:false,
    final_data:[]
  }

// reducer function for api fetching reducer
const reducer = (state,action) => {

  switch(action.type){

    case "start":
      return {loading:true,error:false,final_data:[]}

    case "success" :
      return {loading:false,error:false,final_data:action.res}
     


      case "failed" :
        return {loading:false,error:true,final_data:[]}
       

        default:
          return state
         
  }

}

const App = () => {


  const [result,dispatch] = useReducer(reducer,initialState);//using reducer to data fetch

  const [user_input,setUser_input] = useState();//pathname for api


  // set the path value for serch
  const handleChange = (e) => setUser_input(e.target.value);
  


  // handling search
  const handleSearch = () => {

      dispatch({type:'start'})

      fetch(`https://www.superheroapi.com/api.php/608367351020196/search/${user_input}`)
      .then(res => {return res.json()})
      .then(data => dispatch({type:'success',res:data.results}))
      .catch(e => dispatch({type:'failed'}))
  }







  return (
    <div className='flex justify-center py-[100px] flex-col space-y-[50px] tracking-widest items-center min-h-[100vh]'>

        <h1 className="text-2xl font-bold uppercase">SuperHero's Details</h1>

      <div className='w-[75%] space-y-[80px] rounded-[5px] bg-white shadow-cus pt-[30px] px-[20px] flex justify-center items-center flex-col'>
   

    <BrowserRouter>
          {/* search bar */}
          <div className='flex justify-around w-full'>
            <div className='w-[50%] text-center'>
              <h1 className='text-lg font-bold'>Super<span className='text-base text-red-600'>Hero</span></h1>
            </div>
          <div className="space-x-3 flex w-[50%]">
              <input type="text" onChange={handleChange} className='outline-none text-[12px] placeholder:text-[12px] w-[50%] px-[10px] py-[5px] border border-gray-400' placeholder='search by name'/>
              <Link to="/result" onClick={handleSearch} className="px-4 py-[5px] text-[10px] uppercase bg-red-600 rounded text-white flex items-center my-0">Search</Link>
          </div>
          </div>
      
      {/* Routes */}
          <Routes>
              <Route path="/info" element={<Biography/>}></Route>
              <Route path="/result" element={
                  <Searched.Provider value={result}>
                  <SearchDisplay/>
                  </Searched.Provider>}>
              </Route>
          </Routes>

          {/* bottombar */}
          <div className='w-full py-[20px] flex justify-center text-[11px] font-bold border-t border-gray-400'>

            <p>Created by Zen Aku . Copy right and others right reservers.</p>

          </div>
    </BrowserRouter>

     

     
    
      </div>
    </div>
  )
}

export default App