import { UserContext } from '../context/UserContext'
import { createUserDataHook } from '../hook-factory';

const UserContextProvider = ({type, children}) => {
    const useUserData = createUserDataHook(type);

    return <UserContext value={useUserData}>{children}</UserContext>;
}

export default UserContextProvider