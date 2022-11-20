import React, { createContext, useState, useEffect } from "react";

const GamificationContext = createContext({});

const XP_MOVE = 10;
const GamificationProvider = ({ children }) => {
  const [xp, setXP] = useState(0);
  const question = ""
  
  useEffect(() => {}, []);

  const increaseXP = () => {
    setXP(xp + XP_MOVE);
  };

  return (
    <GamificationContext.Provider value={{ xp, increaseXP}}>
      {children}
    </GamificationContext.Provider>
  );
};

export { GamificationContext, GamificationProvider };
