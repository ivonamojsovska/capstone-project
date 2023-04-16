import { createContext, useState } from "react";

export const Todos_data = createContext();
//export const CurrentUser = createContext()

function Context({ children }) {
    let [todosArr, setTodosArr] = useState([]);
    // let [currentUserContext, setCurrentUserContext] = useState({})

    return (
        // <CurrentUser.Provider value={(currentUserContext, setCurrentUserContext)}>
        <Todos_data.Provider value={(todosArr, setTodosArr)}>
            {children}
        </Todos_data.Provider>
        // </CurrentUser.Provider>
    );
}

export default Context;