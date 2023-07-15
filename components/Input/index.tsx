import React from "react";

import { removeNonAlphanumeric } from "@/utils";

import styles from "./input.module.css";

export type IInputProps = {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  onChange,
  value,
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
    </div>
  );
};
