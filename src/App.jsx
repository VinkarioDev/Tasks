import { useState } from "react"
import "./App.css"
import { ButtonAdd } from "./components/ButtonAdd"
import { InputTask } from "./components/InputTask"

function App() {

  const [task, setTask] = useState([])
  const [inputValue, setInputValue] = useState("")

  function addTask() {
    const tmp = [...task, inputValue]

    setTask(tmp)
    setInputValue("")

  }

  function deletarTarefa(){

  }

  return (
    <>

      <h1>Lista de Tarefas</h1>
      <div>
        <InputTask value={inputValue} placeholder={"Enter Task"} onchange={(e) => setInputValue(e.target.value)} />
        <ButtonAdd funcao={addTask} textBtn={"Add"} />
      </div>
      <ul>
        {
          task.map((task, index) => {
            return (
              <div>
                <li key={index}>{task}</li>
                <button onClick={deletarTarefa}>Del</button>
              </div>
            )
          })
        }
      </ul>

    </>
  )
}

export default App
