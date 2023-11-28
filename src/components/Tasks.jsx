import {CreateTask} from './CreateTask.jsx'

import styles from './components-css/Tasks.module.css'
import clipboard from '../assets/clipboard.svg'

export function Tasks(){
    return(
    <div>
        <div className={styles.centralizer}>
            <header className={styles.taskBox}>
                <div className={styles.createdTasks}>
                    <p>Tarefas Criadas</p><span className={styles.createdCount}>0</span>
                </div>
                <div className={styles.finishedTasks}>
                    <p>Concluidas</p><span className={styles.finishedCount}>0</span>
                </div>
            </header>
        </div>
        <div className={styles.centralizer}>
            <div className={styles.noTasks}>
                <img src={clipboard}/>
                <h1 className={styles.noTasksH1}>Você ainda não tem tarefas</h1>
                <p className={styles.noTasksP}>Crie tarefas e organize seus itens a fazer.</p>
            </div>
        </div>

        <div className={styles.centralizer}>
            <div className={styles.taskList}>
            </div>
        </div>
    </div>
    
    )
}