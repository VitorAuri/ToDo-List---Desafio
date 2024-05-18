import styles from '../components-css/WhenNoTasks.module.css'
import clipboard from '../assets/clipboard.svg'

export function WhenNoTasks(){
    return(
        <div className={styles.noTasks}>
            <img src={clipboard}/>
            <h1 className={styles.noTasksH1}>Você ainda não tem tarefas</h1>
            <p className={styles.noTasksP}>Crie tarefas e organize seus itens a fazer.</p>
        </div>
    )
}