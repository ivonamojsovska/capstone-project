import { createContext, useState } from "react";

export const Todos_data = createContext(null);

function Context({ children }) {
    const [TodosArr, setTodosArr] = useState();

    return (
        <Todos_data.Provider value={(TodosArr, setTodosArr)}>
            {children}
        </Todos_data.Provider>
    );
}

export default Context;