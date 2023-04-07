import { createContext, useReducer } from "react"

const initialThemeState = { color: "light" }
export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case "SET_LIGHT":
            return { ...state, color: "light" }
        case "SET_DARK":
            return { ...state, color: "dark" }
        default:
            return state;
    }
}

function ThemeProvider({ children }) {
    const [theme, dispatchTheme] = useReducer(themeReducer, initialThemeState)

    const value = {
        theme,
        dispatchTheme,
    }

    return (
        <ThemeContext.Provider value = {value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider