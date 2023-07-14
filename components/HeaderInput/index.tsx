"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { useApi } from "@/hooks/useApi";
import { useGeocode } from "@/hooks/useGeocode";
import { ITrackingInfoCityWithCoordinatesProps } from "@/types";
import { Actions } from "@/reducers/trackingInfoReducer/actions";
import { useTrackingInfoDispatch } from "@/context/TrackingInfoContext";

import { Input } from "../Input";

export interface IHeaderInputProps {}
export const HeaderInput = () => {
  const { fetchTrackingInfo } = useApi();
  const { findLatAndLngFromCity } = useGeocode();
  const { dispatch } = useTrackingInfoDispatch();

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
    fetchTrackingInfo(code)
      .then((info) => dispatch({ type: Actions.SET, info }))
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
