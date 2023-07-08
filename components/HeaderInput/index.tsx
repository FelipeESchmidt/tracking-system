"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Input } from "../Input";

export interface IHeaderInputProps {}
export const HeaderInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCode = searchParams?.get("code");

  const [code, setCode] = React.useState(initialCode || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCode(value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      onSubmit();
    }
  };

  const onSubmit = () => {
    console.log(code);
  };

  return (
    <form id="code-form" onSubmit={onSubmit}>
      <Input
        onKeyDown={onKeyDown}
        onChange={handleChange}
        value={code}
        placeholder="Digite seu código"
      />
    </form>
  );
};
