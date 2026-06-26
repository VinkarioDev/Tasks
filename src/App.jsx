import { useState } from "react"
import "./App.css"
import { ButtonAdd } from "./components/ButtonAdd"
import { InputTask } from "./components/InputTask"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons" 

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
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div className="tasks">
        <div className="inputButton">
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
        <ul >
          {
            task.map((task, index) => {
              return (
                <div className="listTask" key={index}>
                  <li >{task}</li>
                  <button onClick={() => deleteTask(index)}>
                  <FontAwesomeIcon style={{color:"#fff"}} icon={faTrash} />

                  </button>

                </div>
              )
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default App
