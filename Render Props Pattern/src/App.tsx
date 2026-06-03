import './App.css'
import Toggle from './components/Toggle'

function App() {

  return (
    <>
      <Toggle>
        {(isOpen)=><h1>{isOpen ? 'The button is ON' : 'The button is OFF'}</h1>}
      </Toggle>
    </>
  )
}

export default App
