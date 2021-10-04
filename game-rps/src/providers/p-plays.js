import React, { createContext, useContext, useState } from "react";

const PlayContext = createContext()

export const PlayProvider = ({children}) => {
    const [play, setPlay] = useState('')

    return(
        <PlayContext.Provider value={{play, setPlay}}>
            {children}
        </PlayContext.Provider>
    )
}

export const usePlay = () => useContext(PlayContext)