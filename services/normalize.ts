import { ITrackingInfoCityProps, IPackageProps } from "@/types";

export const normalizeTrackingInfo = (
  data: IPackageProps
): ITrackingInfoCityProps[] => {
  const filterEvents = data.evento.filter(({ cidade, uf }) => !!cidade && !!uf);

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

  const citiesSet = new Set();
  const filteredCities = allCities.filter(({ city, state }) => {
    const duplicate = citiesSet.has(JSON.stringify({ city, state }));
    citiesSet.add(JSON.stringify({ city, state }));
    return !duplicate;
  });

  return filteredCities;
};
