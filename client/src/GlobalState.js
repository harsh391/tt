import { createContext,  useState } from "react";

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [isSidebar,setIsSidebar] = useState(false)
    const [option,setOption] = useState('')
    const [subject,setSubject] = useState('English')
    
    const openSidebar = () => {
        setIsSidebar(true)
    }
    const closeSidebar = () => {
        setIsSidebar(false)
    }

    const state = {
        isSidebar : [isSidebar,setIsSidebar],
        openSidebar,
        closeSidebar,
        option : [option,setOption],
        subject: [subject,setSubject]
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}