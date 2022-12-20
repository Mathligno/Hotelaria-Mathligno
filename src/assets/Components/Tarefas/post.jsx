import { useState } from "react";
import axios from "axios";

export function PostTarefas() {
  const [clientes, setClientes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [Hospedagem, setHospedagem] = useState([]);

function postClientes(id, nome, email, tel) {
    id = prompt("Insira o id do Cliente.")
    nome = prompt("Insira o nome do Cliente.")
    email = prompt("Insira o email do Cliente.")
    tel = prompt("Insira o telefone do Cliente. Ex.: (21) 99999-9999")
    axios
      .post("https://hotelariamathligno.onrender.com/cliente", {"id": id, "nome": nome, "email": email, "telefone": tel})
      .then((result) => {
        console.log(result);
        setClientes(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
function postFuncionarios(id, nome, cargo, cargahoraria, salario) {
    id = prompt("Insira o id do Funcionário.")
    nome = prompt("Insira o nome do Funcionário.")
    cargo = prompt("Insira o cargo do Funcionário. Ex.: Gerente")
    cargahoraria = prompt("Insira a carga horária do Funcionário. Ex.: 8 horas")
    salario = prompt("Insira o salário do Funcionário. Ex.: R$ 10.000,00")
    axios
      .post("https://hotelariamathligno.onrender.com/funcionario", {"id": id, "nome": nome, "cargo": cargo, "cargahoraria": cargahoraria, "salario": salario})
      .then((result) => {
        console.log(result);
        setFuncionarios(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
function postHospedagem(idHospedagem, andar , numero, camas, suites) {
    idHospedagem = prompt("Insira o id da Hospedagem.")
    andar = prompt("Insira o número do andar do Quarto.")
    numero = prompt("Insira o número do Quarto. Ex.: 102")
    camas = prompt("Insira a quantidade de camas no Quarto.")
    suites = prompt("Insira a quantidade de suites no Quarto.")
    axios2
      .post("https://hotelariamathligno.onrender.com/hospedagem", {"id": idHospedagem, "andar": andar , "numero": numero, "camas": camas, "suites": suites})
      .then((result) => {
        console.log(result);
        setHospedagem(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  return (
    <div>
      <button onClick={postClientes}>Adicionar Clientes</button>
      <button onClick={postFuncionarios}>Adicionar Funcionários</button>
      <button onClick={postHospedagem}>Adicionar Hospedagem</button>
    </div>
  );
}