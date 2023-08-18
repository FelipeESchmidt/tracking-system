export enum Actions {
  SET,
}

interface ISetAction {
  type: Actions.SET;
  dark: boolean;
}

export type ActionType = ISetAction;
