import { IPackageProps } from "@/types";

import { normalizeTrackingInfo } from "./normalize";

const baseUrl = process.env.NEXT_PUBLIC_TRACKING_URL!;

export const fetchTrackingInfo = async (code: string) => {
  const response = await fetch(`${baseUrl}/prod?cod=${code}`);

  const trackingInfo = await response.json();

  if (trackingInfo.erro) {
    return Promise.reject(trackingInfo.erro);
  }

  return normalizeTrackingInfo(trackingInfo as IPackageProps);
};
