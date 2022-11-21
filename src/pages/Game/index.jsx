import Card from "../../components/Card";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { words } from "../../assets/words";
import { useEffect, useState } from "react";
import Xp from "../../components/Xp";
import Question from "../../components/Question";
import Cronometro from "../../components/Cronometro";
import { MudaEstado } from "../../components/Card";
import { XP_MOVE } from "../../components/Card";

import { GamificationContext } from "../../contexts/Gamification";
import { useContext } from 'react';


const TOTAL_CARDS = 6;

export let Contador = 0

export default function Game() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const { zeroXP } = useContext(GamificationContext);
  
  useEffect(() => {
    let random = words.sort(() => Math.random() - 0.5);
    setCards(random.slice(0, TOTAL_CARDS));

  }, []);

  return (
    <div id="tela">
      <div id="container-topo">
        <div className="titulo">4LearnEnglish</div>
        <div className="Xp" ><Xp total={80} /></div>
      </div>
      
      <div className="caixa-question"><Question/><Cronometro /></div>

      <div id="caixa-cards">
        {cards.map((word, idx) => (
          <Card key={idx} content={word} />
        ))}
      </div>

      <div id="FaixaB2">
        <button
          className="Ranking"
          onClick={() => {
            zeroXP()
            MudaEstado()
            {console.log(XP_MOVE)}
            navigate("/ranking");
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
