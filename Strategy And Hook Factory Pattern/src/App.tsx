import './App.css'
import { useSelectedUserData } from './hooks/useSelectedUserData'

function App() {
  useSelectedUserData();

  return (
    <>
    <div className="">
      <h1>Hook Factory Pattern</h1>
    LOOK AT THE CONSOLE & TRY TO CHANGE CONTEXT PROVIDER PROP
    </div>
    </>
  )
}

export default App
