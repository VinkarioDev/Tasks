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
    if (inputValue.trim() === "") {
      setError(true)
      return
    } else {
      setError(false)
      const newTask = {
        id: Date.now(),
        texto: inputValue,
        concluida: false
      }
      setTask([...task, newTask])
      setInputValue("")
    }
  }

  function deleteTask(idDeletar) {
    setTask(task.filter(task => task.id !== idDeletar))
  }

  function markupCheck(idAlternar) {
    setTask(
      task.map(task =>
        task.id === idAlternar ? { ...task, concluida: !task.concluida } : task
      )
    )
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div className="tasks">
        <div className="inputButton">
          <InputTask
            classe={`${error ? "empytInput" : "inputTask"}`}
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
            task.map((task) => {
              return (
                <div className="listTask" key={task.id}>
                  <li>
                    {task.concluida ? <del style={{ textDecorationColor: "#ca9c17", fontStyle: "italic" }}>{task.texto}</del> : task.texto}
                  </li>

                  <div className="inputCheck">
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={task.concluida}
                      onChange={() => markupCheck(task.id)}
                    />
                    <button onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon style={{ color: "#1b718a" }} icon={faTrash} />
                    </button>
                  </div>
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