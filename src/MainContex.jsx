import React, { createContext, useState } from 'react';
const context = createContext()

const MainContex = (props) => {
    const [user, setuser] = useState(null)
    const login =(userdata)=>{
        setuser(userdata)
    }
    const logout =()=>{
        setuser(null)
    }
    return (
        <context.Provider value={{user, login, logout}}>
            {props.children}
        </context.Provider>
    );
}

export default MainContex;

export {context}