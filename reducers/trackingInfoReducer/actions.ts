import { ITrackingInfoCityWithCoordinatesProps } from "@/types";

export enum Actions {
  SET,
  RESET,
}

interface ISetAction {
  type: Actions.SET;
  info: ITrackingInfoCityWithCoordinatesProps[];
}

interface IResetAction {
  type: Actions.RESET;
}

export type ActionType = ISetAction | IResetAction;
