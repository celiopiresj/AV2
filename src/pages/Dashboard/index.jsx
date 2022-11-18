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

export default function Dashboard() {
  const { signOut, user } = useContext(UsuarioContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="FaixaR">
        <h1>Ranking</h1>
      </div>

      <div className="FaixaT">
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
              <th scope="row">1</th>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Mark</td>
              <td>350</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Jacob</td>
              <td>450</td>
              <td>17/11/2022 23:40</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Jacob</td>
              <td>450</td>
              <td>17/11/2022 23:40</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="FaixaB">
        <button
          id="Login"
          onClick={() => {
            signOut();
            navigate("/login");
          }}
        >
          Sair
        </button>

        <button
          id="Game"
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
