import styles from "./Button.module.scss";

// default to avoid issues where no CB is provided
function Button({ onClickCB = () => {}, buttonText, SvgIcon }) {
  return (
    <button onClick={onClickCB} className={styles.button}>
      {SvgIcon && <SvgIcon />}
      {buttonText}
    </button>
  );
}

export default Button;
