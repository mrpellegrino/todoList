import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "../components/Task.module.css"


export interface TaskProps {
    key: string;
    title: string;
    did: boolean;
  
}
export function Task(props:TaskProps)
{
    return(
        <div className={styles.task}>
            <div>
            {props.did ? (<button> <CheckCircle weight="fill" className={styles.checked} /> </button>) : (<button> <Circle className={styles.unchecked} /> </button>)}
            <span>{props.title}</span>
            </div>
            <button className={styles['trash-button']}><Trash/></button>
        </div>
    )
}