"use client";

import React from "react";
import { useApi } from "@/hooks/useApi";
import { useGeocode } from "@/hooks/useGeocode";
import { useSearchParams } from "next/navigation";

import { Input } from "../Input";

export interface IHeaderInputProps {}
export const HeaderInput = () => {
  const { fetchTrackingInfo } = useApi();
  const { findLatAndLngFromCity } = useGeocode();

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

  const onSubmit = async () => {
    if (!code) return;
    const trackingInfo = await fetchTrackingInfo(code).catch((error) =>
      console.log(error)
    );

    if (!trackingInfo) return;
    const coordinates = await Promise.all(
      trackingInfo.evento.map(
        async (ev) => await findLatAndLngFromCity(ev.cidade, ev.uf)
      )
    );

    console.log({ coordinates });
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
