import "./style.css";
import { useContext } from "react";
import { words } from "../../assets/words";
import { useEffect, useState } from "react";


export default function Question() {
    
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
      let random = words.sort(() => Math.random() - 0.5);
      setQuestions(random.slice(1,2));
    }, []);
  
    return <div id="Pergunta">{questions.map((questions, idx) => questions.ask)}</div>;
  }
  
  
  