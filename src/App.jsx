import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'

export default function App() {
  document.body.className = 'bg-zinc-900 h-screen'

  return (
    <main className="container mx-auto p-10 flex flex-col gap-4">
      <TaskForm />
      <TasksList />
    </main>
  )
}
