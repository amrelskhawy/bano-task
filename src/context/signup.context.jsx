import { createContext, useState } from "react";


export const SignUpContext = createContext({
    isOpen: false,
    setIsOpen: () => {}
})


export const SignUpContextProvider = ({children}) => {
    const [isOpen,setIsOpen] = useState(false)
    const value = {isOpen,setIsOpen}

    return <SignUpContext.Provider value={value} >
        {children}
    </SignUpContext.Provider>
}