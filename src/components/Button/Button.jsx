import styles from "./Button.module.scss";

function Button({ onClickCB, buttonText }) {
  return (
    <button onClick={onClickCB} className={styles.button}>
      {buttonText}
    </button>
  );
}

export default Button;
