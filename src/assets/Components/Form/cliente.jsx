import Button from '../Buttons'
import '../Buttons/style.css'

export default function Form() {
    return <form method='post'>
        <label> Id: </label>
        <input type="text" id='inputId' />
        <label> Nome: </label>
        <input type="text" id='inputNome' />
        <label> Email: </label>
        <input type="text" id='inputEmail' />
        <label> Telefone: </label>
        <input type="text" id='inputTel' />
    </form>
}
