import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import {UserContext} from '../../store/user-context';

import classes from './UserInfo.module.scss';

const UserInfo = () => {
  const params = useParams();
  const userCtx = useContext(UserContext);

  const filteredUser = userCtx.users.find(user => user.nome === params.info);

  return (
    <Fragment>
      <div className={classes.div}>
       <p>{filteredUser.nome}</p>
       <p>{filteredUser.email}</p>
       <p>{filteredUser.senha}</p>
      </div>
    </Fragment>
  );
};

export default UserInfo;
