import React, { createContext, useState, useEffect } from "react";
import { XP_MOVE } from "../components/Card";

const GamificationContext = createContext({});

const GamificationProvider = ({ children }) => {

    let [xp, setXP] = useState(0);

    useEffect(() => {

    }, []);

    const increaseXP = () => {
        setXP(XP_MOVE);
    };

    const zeroXP = () => {
        setXP(0);
    };

    return (
        <GamificationContext.Provider value={{ xp, increaseXP, zeroXP }}>
            {children}
        </GamificationContext.Provider>
    );
};

export { GamificationContext, GamificationProvider };
