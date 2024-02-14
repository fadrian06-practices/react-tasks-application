import { createContext, useEffect, useState } from 'react'
import tasksMock from '../data/tasks.json'

export const TaskContext = createContext()

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(tasksMock)
  }, [])

  function createTask({ title, description }) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title,
        description
      }
    ])
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  )
}
