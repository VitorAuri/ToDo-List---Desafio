import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { TaskBox } from './TaskBox.jsx';
import { WhenNoTasks } from './WhenNoTasks.jsx';
import styles from './components-css/TaskList.module.css';

export function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');
    const [totalMarked, setTotalMarked] = useState(0);

    function handleCreateNewTask(event) {
        event.preventDefault();
        const newTask = {
            text: newTaskText,
            isMarked: false
        };
        setTasks([...tasks, newTask]);
        setNewTaskText('');
    }

    function handleCreateNewTaskChange(event) {
        setNewTaskText(event.target.value);
    }

    function deleteTask(taskToDelete) {
        const tasksWithoutDeletedOne = tasks.filter(task => task.text !== taskToDelete.text);
        if (taskToDelete.isMarked) {
            setTotalMarked(totalMarked - 1);
        }
        setTasks(tasksWithoutDeletedOne);
    }

    function countTask(taskToToggle) {
        const updatedTasks = tasks.map(task => {
            if (task.text === taskToToggle.text) {
                const updatedTask = { ...task, isMarked: !task.isMarked };
                setTotalMarked(prevCount => prevCount + (updatedTask.isMarked ? 1 : -1));
                return updatedTask;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
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
                        <PlusCircle className={styles.buttonIcon} size={25} />
                    </button>
                </div>
            </form>
            <div className={styles.centralizer}>
                <header className={styles.taskInfo}>
                    <div className={styles.createdTasks}>
                        <p>Tarefas Criadas</p><span className={styles.createdCount}>{tasks.length}</span>
                    </div>
                    <div className={styles.finishedTasks}>
                        <p>Concluídas</p><span className={styles.finishedCount}>{totalMarked} de {tasks.length}</span>
                    </div>
                </header>
            </div>
            <div className={styles.centralizer}>
                {tasks.length <= 0 ? <WhenNoTasks /> : <></>}
            </div>
            <div className={styles.centralizerList}>
                <div className={styles.taskList}>
                    {tasks.map(task => (
                        <TaskBox
                            key={task.text}
                            content={task.text}
                            isMarked={task.isMarked}
                            onCounting={() => countTask(task)}
                            onDeleteTask={() => deleteTask(task)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
