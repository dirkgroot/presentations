import {HTMLAttributes} from "react";
import styles from "./Emphasis.module.scss";

export const Emphasis = (props: HTMLAttributes<HTMLSpanElement>) => (
  <span className={styles.punctuation} {...props} />
);
