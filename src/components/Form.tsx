import styles from './Form.module.css'
import {PlusCircle} from  '@phosphor-icons/react'
export function Form(){
    return(
        <form  className={styles.Form} action="">
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button> <span>Criar <PlusCircle/></span> </button>
        </form>
    )
}