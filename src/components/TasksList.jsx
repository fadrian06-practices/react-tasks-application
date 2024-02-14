import { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import TaskCard from './TaskCard'

export default function TasksList() {
  const { tasks } = useContext(TaskContext)

  if (!tasks.length) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        There is no tasks yet.
      </h1>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
