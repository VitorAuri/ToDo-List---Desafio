import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Tasks } from './components/Tasks.jsx'

export function App() {

  return (
    <div>
      <Header />
      <main>
        <Tasks />
      </main>
    </div>
  )
}
