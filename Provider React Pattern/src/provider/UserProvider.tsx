import { useState } from 'react';
import { UserContext } from '../context';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'John Doe', age: 30 })

    const logout = () => {
        setUser(null);
    }

    const login = () => {
        setUser({ name: 'John Doe', age: 30 });
    }

    return (
        <UserContext.Provider value={{ user, logout, login }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;