import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './Global.css'
import { Header } from './components/Header'
import { Form } from './components/Form'
import {Task, TaskProps} from './components/Task'

import style from './App.module.css'

const taskList: TaskProps[] = [
  {
    key: uuid(),
    title: 'Fazer projeto 1 de do curso',
    did: true
  },
  {
    key: uuid(),
    title: 'Fazer projeto 2 de do curso',
    did: false
  }
]




export function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper}>
      <Form />
      <div>
      <div className={style.tasklist}>
            <div className={style.info}>
            <h6>Tarefas Criadas{' '} <span> 5 </span></h6>
            <h6>Concluídas {' '} <span>2 de 5</span> </h6> 
            </div> 

            {taskList.map(task => {
            return (
              <Task
                key={task.key}
                title={task.title}
                did ={task.did}

              />
            )
          })}

          
      </div>
      </div>
      </div>
    </>
  )
}

export default App
