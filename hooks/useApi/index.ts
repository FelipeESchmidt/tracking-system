"use client";

import api from "@/services/axios";
import { IPackageProps } from "@/types";

export const useApi = () => {
  const fetchTrackingInfo = async (code: string) => {
    return api.get<IPackageProps>(`/prod?cod=${code}`);
  };

  return { fetchTrackingInfo };
};
