"use client";

import { ITrackingInfoStateProps } from "@/types";
import { ActionType, Actions } from "./actions";

export const initialState: ITrackingInfoStateProps = { info: [] };

export const reducer = (
  state: ITrackingInfoStateProps,
  action: ActionType
): ITrackingInfoStateProps => {
  switch (action.type) {
    case Actions.SET:
      return { info: action.info };

    case Actions.RESET:
      return { ...initialState };

    default:
      return state;
  }
};
