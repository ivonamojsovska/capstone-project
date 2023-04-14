import { createContext, use, useState } from "react";

export const Todos_data = createContext(null);
export const CurrentUser = createContext(null)

function Context({ children }) {
    const [todosArr, setTodosArr] = useState();
    const [currentUser, setCurrentUser] = useState({})

    return (
        <CurrentUser.Provider value={(currentUser, setCurrentUser)}>
            <Todos_data.Provider value={(todosArr, setTodosArr)}>
                {children}
            </Todos_data.Provider>
        </CurrentUser.Provider>
    );
}

export default Context;