"use client";

import api from "@/services/axios";
import { IPackageProps } from "@/types";
import { normalizeTrackingInfo } from "@/services/normalize";

export const useApi = () => {
  const fetchTrackingInfo = async (code: string) => {
    return api
      .get(`/prod?cod=${code}`)
      .then(({ data }: { data: IPackageProps }) => normalizeTrackingInfo(data))
      .catch((error) => console.log(error)); // TODO: message
  };

  return { fetchTrackingInfo };
};
