"use client";

import api from "@/services/axios";
import { ITrackingInfoCityWithCoordinatesProps } from "@/types";
import { useEffect } from "react";

type ReturnDataProps = ITrackingInfoCityWithCoordinatesProps[];

export const useApi = () => {
  useEffect(() => {
    api.defaults.baseURL = `${window.location.origin}/api`;
  }, []);

  const fetchTrackingInfo = async (code: string) => {
    return api
      .post("/fetch-info", { code })
      .then(({ data }: { data: ReturnDataProps }) => data);
  };

  return { fetchTrackingInfo };
};
