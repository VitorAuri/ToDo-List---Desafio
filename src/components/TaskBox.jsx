import { useState } from 'react';
import styles from './components-css/TaskBox.module.css'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export function TaskBox({content, onDeleteTask, onCounting}){

    const [isMarked, setIsMarked] = useState([false]);
    
    function handleCheckTask (){
        event.preventDefault()
      setIsMarked(prevIsMarked => !prevIsMarked)
    };

    

    const circle = isMarked ? <Circle size={25} /> : <CheckCircle className={styles.checked} size={25}/>;

    function handleCountMarkedTask(){
        onCounting()
    }
    function handleDeleteTask(){
        onDeleteTask(content)
    }

    return(
        <div>
            <form onSubmit={handleCheckTask} className={styles.taskBox}>
                <button onClick={handleCountMarkedTask} type='submit' className={styles.button}>{circle}</button>
                
                <div className={styles.taskText}>
                    <p>{content}</p>
                </div>
                
                <button onClick={handleDeleteTask} className={styles.trash}>
                    <Trash size={25}/>
                </button>
            </form>
        </div>
    )
}