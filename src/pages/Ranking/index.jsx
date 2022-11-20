import { UsuarioContext } from "../../contexts/User";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useState } from "react";

import firebaseApp from "../../services/firebase";
import { useEffect } from "react";
import { async } from "@firebase/util";

export default function Ranking() {
  const { signOut, user } = useContext(UsuarioContext);

  const navigate = useNavigate();

  return (
    <>
      <div id="FaixaR">
        <div className="titulo">Ranking</div>
      </div>

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
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <td>2º</td>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <td>3º</td>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <td>4º</td>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <td>5º</td>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <td>6º</td>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <td>7º</td>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <td>8º</td>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <td>9º</td>
              <td>Jacob</td>
              <td>450</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <td>10º</td>
              <td>Jacob</td>
              <td>450</td>
              <td>17/11/2022 23:40</td>
            </tr>
          </tbody>
        </table>
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
            navigate("/game");
          }}
        >
          Ir para o Jogo
        </button>
      </div>

    </>
  );
}
