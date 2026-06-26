import { useState } from "react"
import "./App.css"
import { ButtonAdd } from "./components/ButtonAdd"
import { InputTask } from "./components/InputTask"

function App() {
  const [task, setTask] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState(false)
  function addTask() {
    if (inputValue === "") {
      setError(true)
      return
    } else {
      setError(false)
      const tmp = [...task, inputValue]
      setTask(tmp)
      setInputValue("")
    }
  }
  function deleteTask(index) {
    setTask(() => {
      return task.filter((_, indexAtual) => indexAtual !== index)
    })
  }
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <div>
        <InputTask
          classe={`${error ? "empytInput" : ""}`}
          value={inputValue}
          placeholder={"Enter Task"}
          onchange={(e) => setInputValue(e.target.value)}
        />
        <ButtonAdd
          funcao={addTask}
          textBtn={"Add"}
        />
      </div>
      <ul>
        {
          task.map((task, index) => {
            return (
              <div key={index}>
                <li >{task}</li>
                <button onClick={() => deleteTask(index)}>del</button>
              </div>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
