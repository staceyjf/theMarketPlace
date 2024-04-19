import styles from "./Button.module.scss";

// default to avoid issues where no CB is provided
function Button({ stylename, onClickCB = () => {}, buttonText, SvgIcon }) {
  let stylingClasses = styles.button;

  // add additional css as props
  if (stylename) stylingClasses += ` ${styles[stylename]}`;

  return (
    <button onClick={onClickCB} className={stylingClasses}>
      {SvgIcon && <SvgIcon />}
      {buttonText}
    </button>
  );
}

export default Button;
