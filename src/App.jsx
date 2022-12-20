import { useState } from 'react'
import { GetTarefas } from './assets/Components/Tarefas/get'
import { PostTarefas } from './assets/Components/Tarefas/post'
import { DeleteTarefas } from './assets/Components/Tarefas/del'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GetTarefas />
      <PostTarefas />
      <DeleteTarefas />
    </div>
  )
}

export default App
