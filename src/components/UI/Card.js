import { Fragment } from "react";


import classes from "./Card.module.scss";

const Card = (props) => {
  const showDetails = () => {
    console.log(props.nome, props.email);
  };
  return (
    <Fragment>
      <div className={classes.wrapper} onClick={showDetails}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Card;
