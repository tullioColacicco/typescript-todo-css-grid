import React, {ChangeEvent, FC,useState} from 'react';

import './App.css';
import { ITask } from './components/interfaces';
import Memorytasks from './components/MemoryTasks';




const App: FC=()=> {
  const [task,setask] = useState<string>('')
  const [listOfTasks, setListOfTasks] = useState<ITask[]>([])


  const handleChange= (event: ChangeEvent<HTMLInputElement>) :void=>{
    setask(event.target.value)

  }
  const addTask = ():void => {

    const newTask = {taskName: task}
setListOfTasks ([...listOfTasks, newTask])
setask('')
}
const deleteTask =(taskToDelete: string): void => {
  setListOfTasks(listOfTasks.filter((task)=> {
    return task.taskName !== taskToDelete
  }))
}



  return (
<div className='container'>
  <header id="pageHeader">Header</header>
  <div id="mainArticle">
 <div className='nestedGrid'>
    <div className="input-container">
    <input className="memory-input"type="text"
      placeholder="memory"
      name='task'
       value={task}
       onChange={handleChange}/>

      <button onClick={addTask}>add</button>
     
    </div>
    <div className="tasks-Container">
      {listOfTasks.map((task: ITask, key)=> {
        return <Memorytasks  deleteTask={deleteTask} task={task} key={key}/>
      })}
      </div>
    
    </div>
  </div>
  <nav id="mainNav">Nav</nav>
  <div id="siteAds">Ads</div>
  <footer id="pageFooter">Footer</footer>
</div>
  );
}

export default App;
