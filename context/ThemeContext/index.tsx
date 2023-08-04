import { IWithChildren } from "@/types";
import { ActionType } from "@/reducers/themeReducer/actions";
import { reducer, initialState } from "@/reducers/themeReducer";

import React, { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext({ ...initialState });

export const ThemeDispatchContext = createContext(
  {} as { dispatch: React.Dispatch<ActionType> }
);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useThemeDispatch = () => {
  return useContext(ThemeDispatchContext);
};

export const ThemeContextProvider = ({ children }: IWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={{ dispatch }}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};
