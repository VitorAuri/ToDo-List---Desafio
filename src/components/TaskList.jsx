import { TaskBox } from './TaskBox.jsx'
import { WhenNoTasks } from './WhenNoTasks.jsx'
import {  PlusCircle  } from 'phosphor-react'

import styles from './components-css/TaskList.module.css'
import { useState } from 'react'

export function Tasks(){

    const [task, setTask] = useState([
    ])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(){
        event.preventDefault()

        setTask([...task, newTaskText])
        setNewTaskText('')
    }
    function handleCreateNewTaskChange(){
        setNewTaskText(event.target.value)
    }

    function deleteTask(taskToDelete){
        const tasksWithoutDeletedOne = task.filter(task => {
            return task != taskToDelete
        })
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
                    <p>Concluidas</p><span className={styles.finishedCount}>0 de {task.length}</span>
                </div>
            </header>
        </div>
        <div className={styles.centralizer}>
            <WhenNoTasks/>
        </div>

        <div className={styles.centralizerList}>
            <div className={styles.taskList}>
            {task.map(task =>{
                return(
                    <TaskBox
                    key={task}
                    content={task} 
                    onDeleteTask={deleteTask}
                    />
                )
               })}
            </div>
        </div>
    </div>
    
    )
}