import classes from "./ToggleMenu.module.scss";

const ToggleMenu = () => {

  const toggleMobileMenu = () => {
    console.log('abrindo menu!');
  }

  return (
      <button className={classes["toggle-button"]} onClick={toggleMobileMenu}>
        <span className={classes["toggle-button--bar"]}></span>
        <span className={classes["toggle-button--bar"]}></span>
        <span className={classes["toggle-button--bar"]}></span>
      </button>
  );
};

export default ToggleMenu;
