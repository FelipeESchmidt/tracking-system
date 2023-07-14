"use client";

import api from "@/services/axios";
import { ITrackingInfoCityWithCoordinatesProps } from "@/types";

type ReturnDataProps = ITrackingInfoCityWithCoordinatesProps[];

export const useApi = () => {
  const fetchTrackingInfo = async (code: string) => {
    return api
      .post("/fetch-info", { code })
      .then(({ data }: { data: ReturnDataProps }) => data);
  };

  return { fetchTrackingInfo };
};
