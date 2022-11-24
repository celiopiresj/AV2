import "./style.css";
import { useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { words } from "../../assets/words";


let Questions = "";
let NewWords = "";

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

import { UsuarioContext } from "../../contexts/User";
import firebaseApp from "../../services/firebase";
import { MudaEstado, XP_MOVE } from "../../components/Card";


export default function Ranking() {
  const { signOut, user } = useContext(UsuarioContext);
  const db = getFirestore(firebaseApp);
  const [ranking, setRanking] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "Ranking"), orderBy("pontos", 'desc'));

    onSnapshot(q, (querySnapshot) => {
      const aux = [];
      querySnapshot.forEach((doc) => {
        aux.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setRanking([...aux]);
    });


  }, []);

 
  var tabelaDados = {} 
  tabelaDados.email = ranking.map(function(dados) {
    return dados.email
  })
  tabelaDados.data = ranking.map(function(dados) {
    return dados.data
  })
  tabelaDados.pontos = ranking.map(function(dados) {
    return dados.pontos
  })



  return (
    <>
      <div id="FaixaR">
        <div className="titulo">Ranking</div>
      </div>

      <div>
        <div id="FaixaT">
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Score</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>1º</td>
              <td>{tabelaDados.email[0]}</td>
              <td>{tabelaDados.pontos[0]}</td>
              <td>{tabelaDados.data[0]}</td>
            </tr>
            <tr>
              <td>2º</td>
              <td>{tabelaDados.email[1]}</td>
              <td>{tabelaDados.pontos[1]}</td>
              <td>{tabelaDados.data[1]}</td>
            </tr>
            <tr>
              <td>3º</td>
              <td>{tabelaDados.email[2]}</td>
              <td>{tabelaDados.pontos[2]}</td>
              <td>{tabelaDados.data[2]}</td>
            </tr>
            <tr>
              <td>4º</td>
              <td>{tabelaDados.email[3]}</td>
              <td>{tabelaDados.pontos[3]}</td>
              <td>{tabelaDados.data[3]}</td>
            </tr>
            <tr>
              <td>5º</td>
              <td>{tabelaDados.email[4]}</td>
              <td>{tabelaDados.pontos[4]}</td>
              <td>{tabelaDados.data[4]}</td>
            </tr>
            <tr>
              <td>6º</td>
              <td>{tabelaDados.email[5]}</td>
              <td>{tabelaDados.pontos[5]}</td>
              <td>{tabelaDados.data[5]}</td>
            </tr>
            <tr>
              <td>7º</td>
              <td>{tabelaDados.email[6]}</td>
              <td>{tabelaDados.pontos[6]}</td>
              <td>{tabelaDados.data[6]}</td>
            </tr>
            <tr>
              <td>8º</td>
              <td>{tabelaDados.email[7]}</td>
              <td>{tabelaDados.pontos[7]}</td>
              <td>{tabelaDados.data[7]}</td>
            </tr>
            <tr>
              <td>9º</td>
              <td>{tabelaDados.email[8]}</td>
              <td>{tabelaDados.pontos[8]}</td>
              <td>{tabelaDados.data[8]}</td>
            </tr>
            <tr>
              <td>10º</td>
              <td>{tabelaDados.email[9]}</td>
              <td>{tabelaDados.pontos[9]}</td>
              <td>{tabelaDados.data[9]}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="FaixaB">
        <button
          className="Login"
          onClick={() => {
            signOut();
            navigate("/login");
          }}
        >
          Sair
        </button>

        <button
          className="Game"
          onClick={() => {
            NewWords = words.sort(() => Math.random() - 0.5);
            Questions = NewWords[0].ask;
            MudaEstado()
            navigate("/game");
          }}
        >
          Ir para o Jogo
        </button>
      </div>
    </>
  );
}

export { Questions };
