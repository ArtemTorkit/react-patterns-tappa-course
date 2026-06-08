import './App.css'
import useUserContext from './hooks/useUserContext.js'

function App() {
  const {user, logout, login} = useUserContext()

  if (!user) {
    return (
      <>
        <button onClick={login}>Login</button>
      </>
    )
  }

  return (
    <>
      {user.name}
        <button onClick={logout}>Logout</button>
    </>
  )
}

export default App
