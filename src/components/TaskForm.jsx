import { useContext, useState } from 'react'
import { TaskContext } from '../contexts/TaskContext'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { createTask } = useContext(TaskContext)

  function handleSubmit(event) {
    event.preventDefault()
    createTask({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 flex flex-col gap-3' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-bold text-white'>Add your task</h1>
        <input
          className='bg-slate-300 p-3 w-full'
          autoFocus
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write your task title"
          />
        <textarea
          className='bg-slate-300 p-3 w-full'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Write your task description"
        />
        <button className='bg-indigo-500 px-3 py-1 text-white'>Save</button>
      </form>
    </div>
  )
}
