import { Header } from './components/Header.jsx'
import { TaskList } from './components/TaskList.jsx'
import './components-css/Global.module.css'

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
