import "./App.css"
import { ButtonAdd } from "./components/ButtonAdd"
import { InputTask } from "./components/InputTask"

function App() {

  return (
    <>

      <h1>Lista de Tarefas</h1>
      <div>
        <InputTask />
        <ButtonAdd textBtn={"Add"} />
      </div>

    </>
  )
}

export default App
