import "material-icons/iconfont/material-icons.css";

export interface IIconProps {
  i: string;
}

export const Icon = ({ i }: IIconProps) => {
  return <span className="material-icons">{i}</span>;
};