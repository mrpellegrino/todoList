import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './Global.css'
import { Header } from './components/Header'
import { EmpytList } from './components/EmpytList'
import { Form } from './components/Form'
import {Task, TaskProps} from './components/Task'

import style from './App.module.css'

export function App() {

const [tasks , setTasks] = useState<TaskProps[]>([]);

function handleSaveTask(title:string)
{
    const newTask= {
      id: uuid(),
      title: title,
       did: false,
    }
    setTasks([...tasks,newTask])

}

function handledeleteTask(id: string)
 {
  const TaskWithoutDeletedOne = tasks.filter(tasks => {
    return tasks.id !== id;
  })
  setTasks(TaskWithoutDeletedOne)
 }


 function handleuncheckTask(id: string)
 {
  const TaskWithuncheckOne = tasks.map(tasks => {
    
    if(tasks.id===id)
    {
      tasks.did=false
    }
    return tasks;
  })
  setTasks(TaskWithuncheckOne)
 }

 function handlecheckTask(id: string)
 {
  const TaskWithcheckOne = tasks.map(tasks => {
    
    if(tasks.id===id)
    {
      tasks.did=true
    }
    return tasks;
  })
  setTasks(TaskWithcheckOne)
 }



 function completedNumber()
 {
  const taskCompleted = tasks.filter(tasks => {
    return tasks.did ==true;
  })

  return taskCompleted;
 }









  return (
    <>
      <Header />
      <div className={style.wrapper}>
      <Form onCreateTask={handleSaveTask} />
      <div>
      <div className={style.tasklist}>
            <div className={style.info}>
            <h6>Tarefas Criadas{' '} <span> {tasks.length} </span></h6>
            <h6>Concluídas {' '} <span>{completedNumber().length} de {tasks.length}</span> </h6> 
            </div> 

            {tasks.length===0?(<EmpytList/>):('')}

            {tasks.map(task => {
            if(task.did===false){
            return (
              <Task
                id={task.id}
                title={task.title}
                did ={task.did} 
                onDeleteTask={handledeleteTask}
                onUncheckTask={handleuncheckTask}
                onCheckTask={handlecheckTask}
              />
            )
          }
          })}
              {tasks.map(task => {
            if(task.did===true){
            return (
              <Task
                id={task.id}
                title={task.title}
                did ={task.did} 
                onDeleteTask={handledeleteTask}
                onUncheckTask={handleuncheckTask}
                onCheckTask={handlecheckTask}
              />
            )
          }
          })}
      </div>
      </div>
      </div>
    </>
  )
}

export default App
