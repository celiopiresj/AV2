import { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { UsuarioContext } from "../../contexts/User";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Login() {
  const { signIn, user } = useContext(UsuarioContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/ranking");
  }, [user]);

  const handleClick = (e) => {
    signIn(email, password);
  };

  return (
    <>
       
       <section className="tela-login">
      <div id="configLogo">
        <p>Faça login <br/> E entre para o nosso time</p>
        <img src="./public/imagens/Logo.jpg" alt="Logo" />
      </div>

      <div id="login">
        <h1 id="titulologin">LOGIN</h1>
        <label>Usuário</label>
        <input placeholder="Digite o seu usuário..."
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Senha</label>
        <input placeholder="Digite sua senha..."
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={() => handleClick()}>ENTRAR</button>
      </div>
    </section>
    </>
  );
}
