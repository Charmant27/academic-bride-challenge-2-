import React, {useState, useContext} from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    const [mode, setMode] = useState("light")

    const toggle = () => {
        setMode((prev) => (prev === 'light' ? 'dark': 'light'))
    }

    return(
        <AppContext.Provider value={
            {todos, setTodos, toggle, mode}
        }>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}
