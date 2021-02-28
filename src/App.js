import React,{useState, useEffect} from 'react'
import axios from 'axios'
import store from 'store'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './TodoForm'

export default function App() {
  const [state, setState] = useState([])
  const [status, setStatus] = useState(200)
  const [user, setUser] = useState()

  useEffect(()=>  {async function fetchTodos() {
    let userId = store.get("userId")
    if(!userId)
    {
        userId = uuidv4();
        store.set("userId", userId);
        setUser(userId)
    }
    else{
        setUser(userId)
        const result = await axios.get(`https://kvdb.io/RqyRuHjZX8Z87JhBMhZZu6/${userId}`)
        const {todos} = await result.data
        setStatus(result.status)
        setState (todos)
    }
   } 
   fetchTodos();}, []) 

   const addTodo = newTodo => {
    const newTodos = [...state, newTodo];
    setState(newTodos)
    axios.post(`https://kvdb.io/RqyRuHjZX8Z87JhBMhZZu6/${user}`, {todos:newTodos});
  }
  
   return status===200? (
    <div style ={{backgroundColor:'#f4f3ef',height:'100vh', fontFamily:'Helvetica Neue'}}>
      <br/>
      <div style={{width:'75%', backgroundColor:'white', minHeight:"75vh", margin:'auto', borderRadius:'5px', border:'1px solid black'}} >
        <h1 style={{padding:'3vh',textAlign:'center'}}>Glassix Assignment - Or Fayne</h1>
        <div className = "card" style ={{width:'50%',  margin:'auto',backgroundColor:'#74b9ff'}}>
          <div className="card-body">
              <h4 style={{fontWeight:'bold',color:'whitesmoke'}}>My Todo list</h4>
              {state.map((todo,i)=>
                <input className="form-control" id="disabledInput" placeholder={todo} disabled
                style={{marginRight:'10px',marginBottom:'10px',color:'black'}} type="text" key={i} />
              )}
              <TodoForm addTodo={addTodo} />
          </div>
        </div>
      </div>
    </div>
  )
  : <h1>An Server error was accord</h1>
}

