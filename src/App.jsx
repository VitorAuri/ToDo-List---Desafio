import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { TaskList } from './components/TaskList.jsx'

export function App() {

  return (
    <div>
      <Header />
      <main>
        <TaskList />
      </main>
    </div>
  )
}
