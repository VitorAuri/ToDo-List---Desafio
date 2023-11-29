import styles from './components-css/Header.module.css'
import logo from '../assets/logo.svg'
import {  PlusCircle  } from 'phosphor-react'
import { useState } from 'react'


export function Header(){

    const [task, setTask] = useState() 

    function CreateTask(){
        event.preventDefault()

        
        console.log('Estou funcionando!')
    }

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <img className={styles.imageLogo} src={logo}></img>
                </div>
            </div>

            <form onSubmit={CreateTask} className={styles.createTask}>
                <input name='task' className={styles.inputTask} type="text" required placeholder='Adicione uma nova tarefa'/>

                <div className={styles.aroundButton}>
                    <button type='submit' className={styles.button}>
                        <div className={styles.buttonContent}>Criar</div>
                        <PlusCircle className={styles.buttonIcon} size={25}/>
                    </button>
                </div>
            </form>
        </header>
    )
}