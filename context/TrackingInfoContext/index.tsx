import { IWithChildren } from "@/types";
import { ActionType } from "@/reducers/trackingInfoReducer/actions";
import { reducer, initialState } from "@/reducers/trackingInfoReducer";

import React, { createContext, useContext, useReducer } from "react";

export const TrackingInfoContext = createContext({ ...initialState });

export const TrackingInfoDispatchContext = createContext(
  {} as { dispatch: React.Dispatch<ActionType> }
);

export const useTrackingInfo = () => {
  return useContext(TrackingInfoContext);
};

export const useTrackingInfoDispatch = () => {
  return useContext(TrackingInfoDispatchContext);
};

export const TrackingInfoContextProvider = ({ children }: IWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return (
    <TrackingInfoContext.Provider value={state}>
      <TrackingInfoDispatchContext.Provider value={{ dispatch }}>
        {children}
      </TrackingInfoDispatchContext.Provider>
    </TrackingInfoContext.Provider>
  );
};
