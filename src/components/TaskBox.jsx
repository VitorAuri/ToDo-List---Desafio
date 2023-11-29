import styles from './components-css/TasksBox.module.css'
import {CheckCircle, Circle, Trash} from 'phosphor-react'

export function TaskBox(props){

    let uncheckedTask = <Circle size={25}/>

    function Check(){
        let i = 0
        i += 1

        if (i==1){
            let uncheckedTask = <CheckCircle/>
        }
        else{
            let uncheckedTask = <Circle/>
        }
    }

    return(
        <div>
            <div className={styles.taskBox}>
                <button className={styles.button} onClick={Check}>{uncheckedTask}</button>
                
                <div className={styles.taskText}>
                    <p>{props.task}</p>
                </div>
                
                <div className={styles.trash}>
                    <Trash size={25}/>
                </div>
            </div>
        </div>
    )
}