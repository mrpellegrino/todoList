import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "../components/Task.module.css"


export interface TaskProps {
    id: string;
    title: string;
    did: boolean;
    onDeleteTask?: (id:string)=>void;
    onUncheckTask?: (id:string)=>void;
    onCheckTask ?: (id:string)=>void; 
}

export function Task(props:TaskProps)
{

    function handldeleteTask()
    {
        props.onDeleteTask!(props.id)
    }
    function handleuncheckTask()
    {
        props.onUncheckTask!(props.id)
    }
    function handlecheckTask()
    {
        props.onCheckTask!(props.id)
    }
    return(
        <div className={styles.task}>
            <div>
            {props.did ? (
            <button> <CheckCircle weight="fill" className={styles.checked} onClick={handleuncheckTask} /></button>
            ) : (<button> <Circle className={styles.unchecked}  onClick={handlecheckTask} /> </button>)}
            {props.did ? (
           <span><s>{props.title}</s></span> ) : ( <span>{props.title}</span>)}
            </div>
            <button onClick={handldeleteTask} className={styles['trash-button']}><Trash/></button>
        </div>
    )
}