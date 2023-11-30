import { TaskBox } from './TaskBox.jsx'
import { WhenNoTasks } from './WhenNoTasks.jsx'
import { PlusCircle  } from 'phosphor-react'

import styles from './components-css/TaskList.module.css'
import { useState } from 'react'

export function TaskList(){

    const [task, setTask] = useState([])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(){
        event.preventDefault()

        setTask([...task, newTaskText])
        setNewTaskText('')
    }
    function handleCreateNewTaskChange(){
        setNewTaskText(event.target.value)
    }


    const [markCount, setMarkCount] = useState(0)
    function countTask(){
        setMarkCount((prevMarkCount) => prevMarkCount + 1)
    }

    function deleteTask(taskToDelete){
        const tasksWithoutDeletedOne = task.filter(task => {
            return task != taskToDelete
        })
        {
            setMarkCount((prevMarkCount) => prevMarkCount - 1)
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
                    <p>Concluidas</p><span className={styles.finishedCount}>{markCount} de {task.length}</span>
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