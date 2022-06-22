import { createContext, useState } from "react";

export const MiContext = createContext({})


export default function CartContext({ children }) {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <>
            
            <MiContext.Provider value={{ darkMode, setDarkMode }}>
            {/* <MiContext.Provider value={{darkMode: darkMode, setDarkMode: setDarkMode}}> */}
                <h2>CartContext</h2>
                {children}
                {/* es necesario esa linea para que los hijos se muestren */}

            </MiContext.Provider>
            
        </>
    )
}