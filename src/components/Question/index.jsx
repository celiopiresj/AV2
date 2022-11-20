import "./style.css";
import { useContext } from "react";
import { words } from "../../assets/words";
import { useEffect, useState } from "react";
import { Questions} from "../../pages/Ranking";


export default function Question() {
    return <div id="Pergunta">{Questions}</div>;
  }
  

  