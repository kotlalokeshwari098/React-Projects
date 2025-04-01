import './App.css'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import {clsx} from 'clsx';

export default function App() {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([]);
  const [completed,setCompleted]=useState(0)


  function renderTask() {
    setTasks(prev => ([
      ...prev,
      {
        value: value,
        key: nanoid(),
        active :false 
      }
    ]))

    setValue('')
  }


  function deleteTask(id) {
    setTasks(prev => (
      prev.filter(item => item.key !== id)
    ))
  }

  function toggleTask(id){
    setTasks((prev) => prev.map((item)=>
      {
      if(item.key===id) return {...item,active:!item.active}
      else return item
    }
  ))
  setCompleted(((tasks.filter(item => item.active)).length)+1)
  }

 


  let task =
    tasks.map((item) => (
      <div className="box" key={item.key}>
        <div className="box-left">
          <div 
          
          className= {item.active ? 'color-rep color-full':'color-rep'}
          onClick={()=>toggleTask(item.key)}>

          </div>
          <div className="task-name" >
            {item.value}
          </div>
        </div>
        <div className="box-right">
          <div className="rename">
            <span className="material-symbols-outlined">
              edit_square
            </span>
          </div>
          <div className="delete" onClick={() => deleteTask(item.key)}>
            <span className="material-symbols-outlined">
              delete
            </span>
          </div>
        </div>
      </div>

    )
    )


  return (
    <div className="container">
      <div className="score-card">
        <div className="motivate-talk">
          <p>Task done keep it up</p>
        </div>
        <div className="score">
          <div className="circular-board">
          {completed}/{tasks.length}
          </div>
        </div>
      </div>

      <div className="input-task">
        <div className="input">
          <input
            type="text"
            placeholder='Write your next task'
            value={value}
            onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className="add-symbol">
          <div className="circular-symbol"
            onClick={renderTask}>
            +
          </div>
        </div>
      </div>
      <div className="tasks-container">
        {task}

      </div>
    </div>
  )
}