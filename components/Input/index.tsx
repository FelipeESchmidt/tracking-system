import React from "react";

import { removeNonAlphanumeric } from "@/utils";

import styles from "./input.module.css";
import { Icon } from "../Icon";

export type IInputProps = {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  value,
  onChange,
  onButtonClick,
  ...inputProps
}: IInputProps) => {
  React.useEffect(() => {
    const event = {
      target: {
        value: removeNonAlphanumeric(value),
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  }, [onChange, value]);

  return (
    <div className={styles.input_container}>
      <input type="text" value={value} onChange={onChange} {...inputProps} />
      {!!label && <label>{label}</label>}
      <button className={styles.input_button} onClick={onButtonClick}>
        <Icon i="add_circle" />
      </button>
    </div>
  );
};
