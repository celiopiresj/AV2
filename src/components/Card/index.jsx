import { useState } from "react";

import "./style.css";
import { GamificationContext } from "../../contexts/Gamification";
import { useContext } from "react";
import { Questions } from "../../pages/Ranking";
import { Relogio } from "../Cronometro";

export let XP_MOVE = 100
let trava = 0

export function MudaEstado(){
   trava = 0
   XP_MOVE = 100
}

export default function Card({ content }) {
  const { increaseXP } = useContext(GamificationContext);
  const [isOpened, setIsOpened] = useState(false);
  
  const [style, setStyle] = useState("backfalse");
  const changeStyle = () => {
    setStyle("backtrue");
  };

  const handleClick = () => {
    setIsOpened(true);
    if(content.ask == Questions && Relogio > 0 && trava == 0){
      trava= 1,
      changeStyle()
      if(Relogio > 35){
        increaseXP()
        XP_MOVE = 100
      }
      else if(Relogio > 25){
        XP_MOVE = XP_MOVE - Math.round(XP_MOVE/4)
        increaseXP()
        XP_MOVE = 100
      }
      else if(Relogio > 15){
        XP_MOVE = XP_MOVE - Math.round(XP_MOVE/3)
        increaseXP()
        XP_MOVE = 100
      }
      else{
        XP_MOVE = XP_MOVE - Math.round(XP_MOVE/2)
        increaseXP()
        XP_MOVE = 100
      }
      
    }
    else if(XP_MOVE>10 && trava == 0)
    XP_MOVE = XP_MOVE - 10
  };

  return (
    <div
      className={isOpened ? "card card-opened" : "card"}
      onClick={() => {
        handleClick();
      }}
    >
      <div className="content">
        <div className="front">{content.open}</div>

        <div className={style}>{content.hide}<br/>{content.hide2}</div>
      </div>
    </div>
  );
}
