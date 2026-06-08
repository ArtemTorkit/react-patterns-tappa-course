import { UserContext } from '../context/index.js'
import { useContext } from 'react';

function useUserContext() {
    const {user, logout, login} = useContext(UserContext)
    return { user, logout, login}
}

export default useUserContext;