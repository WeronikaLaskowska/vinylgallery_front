import styles from './Spinner.module.css';

interface SpinnerI {
  width?: number;
  height?: number;
}

export const Spinner = ({width, height}: SpinnerI) => {
  return (
    <div className={styles.loader} style={{width: width, height: height}} />
  );
};
