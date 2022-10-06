
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
    <div className='flex justify-center py-[100px] items-center min-h-[100vh]'>
      <div className='w-[75%] rounded-[5px] bg-white shadow-cus py-[30px] px-[20px] flex justify-center items-center flex-col'>
   

    <BrowserRouter>
          {/* search bar */}
          <div className='space-x-3'>
          <input type="text" onChange={handleChange} className='outline-none text-[12px] placeholder:text-[12px] w-[300px] px-[10px] pb-[5px] border-b border-gray-400' placeholder='search by name'/>
          <Link to="/result" onClick={handleSearch} className="px-4 py-[5px] text-[12px] uppercase bg-red-600 rounded text-white">Search</Link>
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
    </BrowserRouter>

     

     
    
      </div>
    </div>
  )
}

export default App