import React, { createContext, useContext, useState } from "react";

const PageContext = createContext()

export const PageProvider = ({children}) => {
    const [page, setPage] = useState(false)

    return(
        <PageContext.Provider value={{page, setPage}}>
            {children}
        </PageContext.Provider>
    )
}

export const usePage = () => useContext(PageContext)