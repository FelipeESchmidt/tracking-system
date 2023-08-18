"use client";

import { ITrackingInfoCityWithCoordinatesProps } from "@/types";

interface CreateRoutesReturnProps {
  complete: ITrackingInfoCityWithCoordinatesProps[];
  incomplete: ITrackingInfoCityWithCoordinatesProps[];
}

export const useCitiesTracking = () => {
  const createRoutes = (
    data: ITrackingInfoCityWithCoordinatesProps[]
  ): CreateRoutesReturnProps => {
    if (!data.length) return { complete: [], incomplete: [] };
    const allCompleted = data.every(({ hasGone }) => hasGone);

    if (allCompleted) return { complete: data, incomplete: [] };

    const complete = data.filter(({ hasGone }) => hasGone);
    const incomplete = data.filter(({ hasGone }) => !hasGone);

    if (complete.length) incomplete.push(complete[complete.length - 1]);

    return { complete, incomplete };
  };

  return { createRoutes };
};
