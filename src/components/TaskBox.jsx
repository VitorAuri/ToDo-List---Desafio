import styles from './components-css/TaskBox.module.css'
import {CheckCircle, Circle, Trash} from 'phosphor-react'

export function TaskBox({content, onDeleteTask}){

    function handleDeleteTaskt(){
        onDeleteTask(content)
    }

    return(
        <div>
            <div className={styles.taskBox}>
                <button className={styles.button}><Circle size={25}/></button>
                
                <div className={styles.taskText}>
                    <p>{content}</p>
                </div>
                
                <button onClick={handleDeleteTaskt} className={styles.trash}>
                    <Trash size={25}/>
                </button>
            </div>
        </div>
    )
}