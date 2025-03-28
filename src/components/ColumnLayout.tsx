import styles from "./ColumnLayout.module.scss";
import {HTMLAttributes} from "react";

export const ColumnLayout = ({className, ...rest}: HTMLAttributes<HTMLDivElement>) => (
  <div className={`${className} ${styles.columnLayout}`} {...rest} />
);

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  flex?: string | number;
}

export const Column = ({flex, className, ...rest}: ColumnProps) => (
  <div className={`${className} ${styles.column}`} style={{flex: flex ?? 1}} {...rest} />
);
