import styles from "./Button.module.scss";

function Button({ buttonText }) {
  return <button className={styles.button}>{buttonText}</button>;
}

export default Button;
