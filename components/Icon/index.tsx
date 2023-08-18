import "material-icons/iconfont/material-icons.css";
import { IconClasses, IconType } from "./types";

export interface IIconProps {
  i: string;
  type?: IconType;
}

export const Icon = ({ i, type = "default" }: IIconProps) => {
  return <i className={IconClasses[type]}>{i}</i>;
};
