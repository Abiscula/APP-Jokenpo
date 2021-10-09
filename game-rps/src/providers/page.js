import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";

const PageContext = createContext()

export const PageProvider = ({children}) => {
    const [button, setButton] = useState(1) //altera style do botao de acordo com a página

    return(
        <PageContext.Provider value={{button, setButton}}>
            {children}
        </PageContext.Provider>
    )
}

export const useChangePage = () => {
    const { button, setButton } = useContext(PageContext)
    const history = useHistory()

    function changePage(path) {
        history.push(path)
    }

    return {
        button,
        setButton,
        changePage
    }
}