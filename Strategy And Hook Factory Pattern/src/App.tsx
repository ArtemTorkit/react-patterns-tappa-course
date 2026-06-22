import { useContext } from 'react';
import { UserContext } from './context/UserContext'
import './App.css'

function App() {
  const useUserData = useContext(UserContext);
  useUserData();

  return (
    <>
    <div className="">
    LOOK AT THE CONSOLE
    </div>
    </>
  )
}

export default App
