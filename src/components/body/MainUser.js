import { Fragment, useContext } from "react";
import { UserContext } from "../../store/user-context";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./MainUser.module.scss";

const MainUser = () => {
  const userCtx = useContext(UserContext);
  console.log(userCtx);
  return (
    <div className={classes.div}>
      {userCtx.users.map((user) => (
        <Fragment key={user.id}>
        <Link to={`/users/${user.nome}`}>
          <Card
            nome={user.nome}
            email={user.email}
            senha={user.senha}
          >
            {user.nome}
          </Card>
        </Link>
        </Fragment>
      ))}
    </div>
  );
};

export default MainUser;
