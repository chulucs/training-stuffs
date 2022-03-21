import { Fragment } from "react";
import CadastroForm from "../components/body/CadastroForm";

import classes from "./Cadastro.module.scss";

const Cadastro = () => {
  return (
    <Fragment>
      <h2 className={classes.h2}>Cadastre-se!</h2>
      <CadastroForm />
    </Fragment>
  );
};

export default Cadastro;
