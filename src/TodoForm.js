import React,{useState} from 'react'

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault()
      if (!value) return
      addTodo(value)
      setValue("")
    }
  
    return (
      <form onSubmit={handleSubmit} className="form-inline" >
        <input type="text" className= "form-control" value={value} style={{marginLeft:'2px',width:'86%'}}
            placeholder="Add new Todo"
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" className="btn btn-light" style={{marginLeft:'10px'}}>Add</button>
      </form>
    )
  }