import { ITrackingInfoCityProps, IPackageProps, IEventProps } from "@/types";
import appendCityByAcronym from "./appendCityByAcronym";

export const normalizeTrackingInfo = (
  data: IPackageProps
): ITrackingInfoCityProps[] => {
  let events: IEventProps[] = [];
  if ("tipo" in data.evento) events = [data.evento];
  else events = [...data.evento];

  const filterEvents = events.filter(({ cidade, uf }) => !!cidade && !!uf);

  const allCities = filterEvents.reduce<ITrackingInfoCityProps[]>(
    (acc, { cidade, uf, destino }) => {
      const currentCity: ITrackingInfoCityProps = {
        city: cidade,
        state: uf,
        hasGone: true,
      };

      if (destino) {
        const destinyCity: ITrackingInfoCityProps = {
          city: destino.cidade,
          state: destino.uf,
          hasGone: false,
        };
        return [...acc, destinyCity, currentCity];
      }

      return [...acc, currentCity];
    },
    []
  );

  const cityToAppend = appendCityByAcronym(data.sigla, allCities.length);

  if (cityToAppend) allCities.push(cityToAppend);

  const citiesSet = new Set();
  const filteredCities = allCities.filter(({ city, state }) => {
    const duplicate = citiesSet.has(JSON.stringify({ city, state }));
    citiesSet.add(JSON.stringify({ city, state }));
    return !duplicate;
  });

  return filteredCities;
};
