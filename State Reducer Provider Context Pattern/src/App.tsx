import './App.css'
import FormWizzard from './components/FormWizzard'
import FormWizzardProvider from './provider/FormWizzardProvider'

function App() {

  return (
    <>
      <h1>Form Wizzard</h1>
      <FormWizzardProvider>
        <FormWizzard/>
      </FormWizzardProvider>
    </>
  )
}

export default App
