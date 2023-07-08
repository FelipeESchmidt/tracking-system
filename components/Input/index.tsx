import { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "./input.module.css";

export type IInputProps = {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  onChange,
  value,
  ...inputProps
}: IInputProps) => {
  return (
    <div className={styles.input_container}>
      <input type="text" value={value} onChange={onChange} {...inputProps} />
      {!!label && <label>{label}</label>}
    </div>
  );
};
