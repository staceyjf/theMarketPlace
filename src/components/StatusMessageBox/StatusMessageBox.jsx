import styles from "./StatusMessageBox.module.scss";

function StatusMessageBox({ severity = "error", message }) {
  const classes = `${styles.container} ${styles[severity]}`;
  return (
    <div className={classes}>
      <span>{message}</span>
    </div>
  );
}

export default StatusMessageBox;
