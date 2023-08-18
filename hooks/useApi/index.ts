"use client";

import api from "@/services/axios";
import { ITrackingInfoResponseProps } from "@/types";
import { useEffect } from "react";

export const useApi = () => {
  useEffect(() => {
    api.defaults.baseURL = `${window.location.origin}/api`;
  }, []);

  const fetchTrackingInfo = async (code: string) => {
    return api
      .post("/fetch-info", { code })
      .then(({ data }: { data: ITrackingInfoResponseProps }) => data);
  };

  return { fetchTrackingInfo };
};
