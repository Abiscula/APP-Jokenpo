import React, { createContext, useContext, useState } from "react";

const RulesContext = createContext()

export const RulesProvider = ({children}) => {

    const [rules, setRules] = useState(false)

    return(
        <RulesContext.Provider value={{rules, setRules}}>
            {children}
        </RulesContext.Provider>
    )
}

export const useRules = () => useContext(RulesContext)