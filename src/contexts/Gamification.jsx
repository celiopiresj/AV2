import React, { createContext, useState, useEffect } from "react";

const GamificationContext = createContext({});

const XP_MOVE = 10
const GamificationProvider = ({ children }) => {

    let [xp, setXP] = useState(0);


    useEffect(() => {

    }, []);



    const increaseXP = () => {
        setXP(xp + XP_MOVE);
    };

    const zeroXP = () => {
        setXP(xp = 0);
    };



    return (
        <GamificationContext.Provider value={{ xp, increaseXP, zeroXP }}>
            {children}
        </GamificationContext.Provider>
    );
};

export { GamificationContext, GamificationProvider };
