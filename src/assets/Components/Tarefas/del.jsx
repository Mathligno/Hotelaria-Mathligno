import { useState } from "react";
import axios from "axios";

export function DeleteTarefas() {
  const [clientes, setClientes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [hospedagens, setHospedagens] = useState([]);

function deleteClientes(idCli) {
    idCli = prompt("Insira o id do Cliente que deseja deletar.")
    axios
      .delete("https://hotelariamathligno.onrender.com/cliente/" + idCli)
      .then((result) => {
        console.log(result);
        setClientes(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
function deleteFuncionarios(idFunc) {
    idFunc = prompt("Insira o id do Funcionário que deseja deletar.")
    axios
      .delete("https://hotelariamathligno.onrender.com/funcionario/" + idFunc)
      .then((result) => {
        console.log(result);
        setFuncionarios(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
function deleteHospedagens(idHospedagem) {
    idHospedagem = prompt("Insira o id do Quarto que deseja deletar.")
    axios
      .delete("https://hotelariamathligno.onrender.com/hospedagem/" + idHospedagem)
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
      <button onClick={deleteClientes}>Deletar Clientes</button>
      <button onClick={deleteFuncionarios}>Deletar Funcionários</button>
      <button onClick={deleteHospedagens}>Deletar Hospedagens</button>
    </div>
  );
}