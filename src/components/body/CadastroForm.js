import { useRef, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { UserContext } from "../../store/user-context";
import classes from "./CadastroForm.module.scss";

const CadastroForm = () => {
  const userCtx = useContext(UserContext);
  const inputName = useRef();
  const inputEmail = useRef();
  const inputSenha = useRef();
  let navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const nome = inputName.current.value;
    const email = inputEmail.current.value;
    const senha = inputSenha.current.value;
    const userObj = {
      nome,
      email,
      senha,
      id: Math.random()
    };

    userCtx.addUser(userObj);
    navigate('/');
  }


  return (
    <div className={classes.grid}>
      <form onSubmit={submitHandler}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" ref={inputName}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={inputEmail}/>
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" ref={inputSenha}/>
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroForm;
