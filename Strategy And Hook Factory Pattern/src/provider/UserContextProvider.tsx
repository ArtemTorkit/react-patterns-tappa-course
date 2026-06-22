import type { ReactNode } from 'react';
import { UserContext } from '../context/UserContext'
import { createUserDataHook } from '../hook-factory';

interface UserContextProviderProps {
    type: 'gql' | 'fetch' | 'json'
    children: ReactNode
}

const UserContextProvider = ({type, children}: UserContextProviderProps) => {
    const useUserDataHook = createUserDataHook(type);

    return <UserContext value={useUserDataHook}>{children}</UserContext>;
}

export default UserContextProvider