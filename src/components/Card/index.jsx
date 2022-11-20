import { useState } from "react";

import "./style.css";
import { GamificationContext } from "../../contexts/Gamification";
import { useContext } from "react";
import { Questions } from "../../pages/Ranking";

  
export default function Card({ content }) {
  const { increaseXP } = useContext(GamificationContext);
  const [isOpened, setIsOpened] = useState(false);

  const [style, setStyle] = useState("backfalse");
  const changeStyle = () => {
    setStyle("backtrue");
  };


  const handleClick = () => {
    setIsOpened(true);
    if(content.ask == Questions){
      changeStyle(),
      increaseXP()
    }
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

        <div className={style}>{content.hide}</div>
      </div>
    </div>
  );
}
