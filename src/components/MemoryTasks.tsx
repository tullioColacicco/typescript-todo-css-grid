import React from 'react'
import { ITask } from './interfaces'


interface Props {
    task: ITask
    deleteTask(taskToDelete:string): void
}

const Memorytasks =({task,deleteTask}:Props)=> {
    return (
        <div className="taskName-Container">
         
          <span className="taskName"> {task?.taskName}</span>
          <button onClick={()=> {
              deleteTask(task.taskName)
          }} className="delete-Button">X</button>
          
    
        </div>
    )
}

export default Memorytasks
