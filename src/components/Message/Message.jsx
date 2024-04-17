import styles from "./Message.module.scss";

function Message({ severity = "error", message }) {
  const classes = `${styles.container} ${styles[severity]}`;
  return (
    <div className={classes}>
      <span>{message}</span>
    </div>
  );
}

export default Message;
