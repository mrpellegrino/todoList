import styles from './Empty.module.css'
import {ClipboardText} from  '@phosphor-icons/react'
export function EmpytList()
{
    return(
        <div className={styles.container}>
      <ClipboardText size={32}/>
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
    )
}