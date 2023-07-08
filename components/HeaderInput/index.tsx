"use client";

import React from "react";
import { useApi } from "@/hooks/useApi";
import { useSearchParams } from "next/navigation";

import { Input } from "../Input";

export interface IHeaderInputProps {}
export const HeaderInput = () => {
  const { fetchTrackingInfo } = useApi();
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
    if (!code) return;
    fetchTrackingInfo(code)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
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
