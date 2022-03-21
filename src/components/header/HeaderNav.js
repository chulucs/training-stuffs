import { NavLink } from "react-router-dom";

import classes from "./HeaderNav.module.scss";

const HeaderNav = () => {
  return (
    <nav className={classes["header__nav"]}>
      <h2 className={classes["header__logo"]}>LOGO</h2>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="users"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            {" "}
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="cadastro"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Cadastre-se
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
