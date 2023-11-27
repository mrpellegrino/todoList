import styles from './Form.module.css'
import {PlusCircle} from  '@phosphor-icons/react'
import {useState, FormEvent, ChangeEvent} from 'react'

interface Iform{
    onCreateTask:(title:string)=>void
}

export function Form({onCreateTask}:Iform){

    const [taskTitle, setTextTasks] = useState('')

    function handleTextchange(event:ChangeEvent<HTMLInputElement>)
    {
        setTextTasks(event.target.value);
        console.log(taskTitle)
    }
    function handleCreateTask(event:FormEvent)
    {
        event.preventDefault()
       onCreateTask(taskTitle)
       setTextTasks('')
       
    }
    return(
        <form onSubmit={handleCreateTask}  className={styles.Form} >
        <input type="text" value={taskTitle} onChange={handleTextchange}   placeholder='Adicione uma nova tarefa'/>
        <button type='submit'>  <span>Criar <PlusCircle/></span> </button>
        </form>
    )
}
