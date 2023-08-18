import { ITrackingInfoResponseProps } from "@/types";

export enum Actions {
  SET,
  RESET,
}

interface ISetAction {
  type: Actions.SET;
  info: ITrackingInfoResponseProps;
}

interface IResetAction {
  type: Actions.RESET;
}

export type ActionType = ISetAction | IResetAction;
