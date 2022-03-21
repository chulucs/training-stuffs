import ToggleMenu from "./ToggleMenu";
import HeaderNav from "./HeaderNav";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <ToggleMenu />
      <HeaderNav />
    </header>
  );
};

export default Header;
