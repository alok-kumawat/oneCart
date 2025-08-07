import React, { Children, createContext } from 'react'
export const authDataContext = createContext()
const AuthContext = ({children}) => {
    let serverUrl = "https://onecart-backend-26nl.onrender.com"

    let value = {
        serverUrl
    }
  return (
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
