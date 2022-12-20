import { useState } from "react";
import axios from "axios";

export function GetTarefas() {
  const [clientes, setClientes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [hospedagens, setHospedagens] = useState([]);

function getClientes() {
    axios
      .get("https://hotelariamathligno.onrender.com/cliente")
      .then((result) => {
        console.log(result);
        setClientes(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
function getFuncionarios() {
    axios
      .get("https://hotelariamathligno.onrender.com/funcionario")
      .then((result) => {
        console.log(result);
        setFuncionarios(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
function getHospedagem() {
    axios
      .get("https://hotelariamathligno.onrender.com/hospedagem")
      .then((result) => {
        console.log(result);
        setHospedagens(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  return (
    <div>
      <button onClick={getClientes}>Buscar Clientes</button>
      <button onClick={getFuncionarios}>Buscar Funcionários</button>
      <button onClick={getHospedagem}>Buscar Hospedagem</button>

      <ul> 
        <h2> Clientes: </h2>
        {clientes.map((cliente) => (
          <li>Nome: {cliente.nome} | Email: {cliente.email}</li>
        ))}
      </ul>
      
      <ul>
        <h2> Funcionários: </h2>
        {funcionarios.map((funcionario) => (
          <li>Nome: {funcionario.nome} | Cargo: {funcionario.cargo}</li>
        ))}
      </ul>
      <ul>
        <h2> Vagas: </h2>
        {hospedagens.map((hospedagem) => (
          <li>{hospedagem.andar}º Andar | Número do Quarto: {hospedagem.numero}</li>
        ))}
      </ul>
    </div>
  );
}