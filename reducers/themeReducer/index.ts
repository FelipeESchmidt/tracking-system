import { IThemeStateProps } from "@/types";
import { ActionType, Actions } from "./actions";

export const initialState: IThemeStateProps = { dark: true };

export const reducer = (
  state: IThemeStateProps,
  action: ActionType
): IThemeStateProps => {
  switch (action.type) {
    case Actions.SET:
      return { dark: action.dark };

    default:
      return state;
  }
};
