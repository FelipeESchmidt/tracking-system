import { ITrackingInfoCityProps } from "@/types";

type AcronymType = "NL";

type Cities = {
  [key in AcronymType]: (length: number) => ITrackingInfoCityProps;
};

export const cityByAcronym: Cities = {
  NL: (length: number) => ({
    city: "Pequim",
    state: "China",
    hasGone: length >= 1,
  }),
};

export const appendCityByAcronym = (acronym: string, length: number) => {
  if (!(acronym in cityByAcronym)) return false;
  return cityByAcronym[acronym as AcronymType](length);
};

export default appendCityByAcronym;
