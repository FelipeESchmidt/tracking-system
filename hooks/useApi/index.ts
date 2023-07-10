"use client";

import api from "@/services/axios";
import { IPackageProps } from "@/types";

export const useApi = () => {
  const fetchTrackingInfo = async (code: string) => {
    return api
      .get(`/prod?cod=${code}`)
      .then(({ data }: { data: IPackageProps }) => data);
  };

  return { fetchTrackingInfo };
};
