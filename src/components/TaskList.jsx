import { PlusCircle } from 'phosphor-react'
import { TaskBox } from './TaskBox.jsx'
import { WhenNoTasks } from './WhenNoTasks.jsx'

import { useState } from 'react'
import styles from '../components-css/TaskList.module.css'

export function TaskList(){

    const [task, setTask] = useState([])

    const [newTaskText, setNewTaskText] = useState('')

    const [totalMarked,setTotalMarked] = useState(0)

    function handleCreateNewTask(){
        event.preventDefault()
        setTotalMarked((prevMarkCount) => prevMarkCount + 1)
        setTask([...task, newTaskText])
        setNewTaskText('')
    }
    function handleCreateNewTaskChange(){
        setNewTaskText(event.target.value)
    }


    const [markCount, setMarkCount] = useState(0)
    function deleteTask(taskToDelete){
        const tasksWithoutDeletedOne = task.filter(task => {
            return task != taskToDelete
        })
        {
            if((prevMarkCount) => prevMarkCount - 1 <= -1){
                setMarkCount((prevMarkCount) => prevMarkCount = 0)
                setTotalMarked((prevMarkCount) => prevMarkCount = 0)
            }
            else{
                setMarkCount((prevMarkCount) => prevMarkCount - 1)
                setTotalMarked((prevMarkCount) => prevMarkCount - 1)
            }
        }
        setTask(tasksWithoutDeletedOne)
    }

    return(
    <div>
         <form onSubmit={handleCreateNewTask} className={styles.createTask}>
                <input 
                name='task' 
                value={newTaskText} 
                className={styles.inputTask} 
                type="text" 
                required 
                placeholder='Adicione uma nova tarefa'
                onChange={handleCreateNewTaskChange}
                />

                <div className={styles.aroundButton}>
                    <button type='submit' className={styles.button}>
                        <div className={styles.buttonContent}>Criar</div>
                        <PlusCircle className={styles.buttonIcon} size={25}/>
                    </button>
                </div>
            </form>


        <div className={styles.centralizer}>
            <header className={styles.taskInfo}>
                <div className={styles.createdTasks}>
                    <p>Tarefas Criadas</p><span className={styles.createdCount}>{task.length}</span>
                </div>
                <div className={styles.finishedTasks}>
                    <p>Concluidas</p><span className={styles.finishedCount}>{markCount} de {totalMarked}</span>
                </div>
            </header>
        </div>
        <div className={styles.centralizer}>
            {
                task<=1 ? <WhenNoTasks/> : <div></div>
            }
        </div>

        <div className={styles.centralizerList}>
            <div className={styles.taskList}>
            {task.map(task =>{
                return(
                    <TaskBox
                    key={task}
                    content={task} 
                    onCounting={countTask}
                    onDeleteTask={deleteTask}
                    />
                )
               })}
            </div>
        </div>
    </div>
    
    )
}