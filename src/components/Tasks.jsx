import {TaskBox} from './TaskBox.jsx'

import styles from '../components-css/Tasks.module.css'
import clipboard from '../assets/clipboard.svg'

export function Tasks(){

    return(
    <div>
        <div className={styles.centralizer}>
            <header className={styles.taskInfo}>
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

        <div className={styles.centralizerList}>
            <div className={styles.taskList}>
                <TaskBox
                task='    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil libero, ipsum tenetur recusandae veniam est. Odit id obcaecati vel at cum amet debitis, molestiae ea eius sapiente magni consequuntur quam!'
                />
                <TaskBox
                task='    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil libero, ipsum tenetur recusandae veniam est. Odit id obcaecati vel at cum amet debitis, molestiae ea eius sapiente magni consequuntur quam!'
                />
            </div>
        </div>
    </div>
    
    )
}