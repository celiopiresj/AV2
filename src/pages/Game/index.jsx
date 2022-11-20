import Card from "../../components/Card";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { words } from "../../assets/words";
import { useEffect, useState } from "react";
import Xp from "../../components/Xp";
import Question from "../../components/Question";


const TOTAL_CARDS = 6;

export default function Game() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    let random = words.sort(() => Math.random() - 0.5);
    setCards(random.slice(0, TOTAL_CARDS));

  }, []);

  return (
    <div id="tela">
      <div id="container-topo">
        <div className="titulo">4LearnEnglish</div>
        <Xp total={80} />
      </div>
      
      <Question indice={5} />

      <div id="caixa-cards">
        {cards.map((word, idx) => (
          <Card key={idx} content={word} />
        ))}
      </div>

      <div id="FaixaB2">
        <button
          className="Ranking"
          onClick={() => {
            navigate("/ranking");
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
