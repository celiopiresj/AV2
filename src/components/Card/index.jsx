import "./style.css";
import { GamificationContext } from "../../contexts/Gamification";
import { useContext, useState } from "react";
import { Questions } from "../../pages/Ranking";
import { Relogio } from "../Cronometro";
import { UsuarioContext } from "../../contexts/User";
import firebaseApp from "../../services/firebase";
import { addDoc, doc,setDoc,collection, getFirestore, serverTimestamp , updateDoc } from "firebase/firestore";

export let XP_MOVE = 100;
let trava = 0;

export async function MudaEstado() {
  trava = 0;
  XP_MOVE = 100;
}

function dataAtualFormatada() {
  const zeroPad = (num, places) => String(num).padStart(places, "0");
  var data = new Date(),
    dia = zeroPad(data.getDate().toString(), 2),
    diaF = zeroPad(dia.length == 1 ? "0" + dia : dia, 2),
    mes = zeroPad((data.getMonth() + 1).toString(), 2),
    mesF = zeroPad(mes.length == 1 ? "0" + mes : mes, 2),
    anoF = zeroPad(data.getFullYear(), 2),
    h = zeroPad(data.getHours(), 2),
    m = zeroPad(data.getMinutes(), 2),
    s = zeroPad(data.getSeconds(), 2);
  return diaF + "/" + mesF + "/" + anoF + " " + h + ":" + m + ":" + s;
}

export default function Card({ content }) {
 
  const { user, auth } = useContext(UsuarioContext);
  const { increaseXP } = useContext(GamificationContext);
  const [isOpened, setIsOpened] = useState(false);
  const [style, setStyle] = useState("backfalse");
  const changeStyle = () => {
    setStyle("backtrue");
  };

  const db = getFirestore(firebaseApp);

  const handleAdd = async () => {
    
    const ranking_json = {
      email: user.email,
      pontos: XP_MOVE ,
      data: dataAtualFormatada(),
    };

    const docRef = await addDoc(collection(db, "Ranking"), ranking_json);
    // const updateTimestamp = await updateDoc(docRef, {
    //  timestamp: serverTimestamp()});

  };
  const handleClick = () => {
    setIsOpened(true);
   
    if (content.ask == Questions && Relogio > 0 && trava == 0) {
      (trava = 1), changeStyle();
     
      if (Relogio >= 35) {
        increaseXP();
        handleAdd();
        XP_MOVE = 100;
      } else if (Relogio >= 25) {
        XP_MOVE = XP_MOVE - Math.round(XP_MOVE * 0.15);
        increaseXP();
        handleAdd();
        XP_MOVE = 100;
      } else if (Relogio >= 15) {
        XP_MOVE = XP_MOVE - Math.round(XP_MOVE * 0.3);
        increaseXP();
        handleAdd(); 
        XP_MOVE = 100;
      } else {
        XP_MOVE = XP_MOVE - Math.round(XP_MOVE * 0.5);
        increaseXP(); 
        handleAdd();
        XP_MOVE = 100;
      }
    } else if (XP_MOVE > 10 && trava == 0) XP_MOVE = XP_MOVE - 10;
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

        <div className={style}>
          {content.hide}
          <br />
          {content.hide2}
        </div>
      </div>
    </div>
  );
}
