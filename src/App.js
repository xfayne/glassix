import React,{useState, useEffect} from 'react'
import axios from 'axios'

const IPDATA_KEY = 'dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e'
const GOOGLE_API_KEY = 'AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk'

export default function App() {
  const [state, setState] = useState()

  useEffect(()=>  {async function fetchSetting() {
    const result = await axios.get(`https://api.ipdata.co?api-key=${IPDATA_KEY}`)
    const {city,country_name,latitude,longitude} = await result.data
    setState ({city,country_name,latitude,longitude})
   } 
   fetchSetting();}, []) 
  
   return state? (
    <div style ={{backgroundColor:'#f4f3ef',height:'100vh', fontFamily:'Helvetica Neue'}}>
      <br/>
      <div style={{width:'75%', backgroundColor:'white', textAlign:'center', margin:'auto', border:'1px solid black'}} >
        <h1 style={{paddingTop:'3vh'}}>Glassix Assignment - Or Fayne</h1>
        <h2>Location - country: {state.country_name}, city: {state.city}</h2>
        <iframe title="map" style ={{width:'90%', height:'60vh',marginBottom:'5%'}}
        src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${state.latitude},${state.longitude}`}>
      </iframe>
      </div>
    </div>
  )
  : <h1>An Error was accord</h1>
}

