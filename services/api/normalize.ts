import {
  ITrackingInfoCityProps,
  IPackageProps,
  IEventProps,
  IBetteredEventProps,
} from "@/types";
import appendCityByAcronym from "./appendCityByAcronym";

const normalizeLocal = (event: IEventProps) => {
  if (event.local === "País") return "China";
  return event.local;
};

const normalizeEvents = (data: IPackageProps) => {
  let events: IEventProps[] = [];
  if ("tipo" in data.evento) events = [data.evento];
  else events = [...data.evento];

  const getCityText = (event: { cidade: string; uf?: string }) => {
    return `${event.cidade} ${event.uf ? `- ${event.uf}` : ""}`;
  };

  const normalizedEvents = events.map((event) => {
    const texts = [];

    if (!!event.destino) {
      const destiny = event.destino;
      texts.push(`de ${event.local}, ${getCityText(event)}`);
      texts.push(`para ${destiny.local}, ${getCityText(destiny)}`);
    } else {
      if (event.local === "País") texts.push(`China`);
      else texts.push(getCityText(event));
    }

    texts.push(`${event.data} ${event.hora}`);

    return {
      ...event,
      description: event.descricao,
      texts,
    };
  });

  return normalizedEvents as IBetteredEventProps[];
};

export const normalizeTrackingInfo = (
  data: IPackageProps
): {
  filteredCities: ITrackingInfoCityProps[];
  events: IBetteredEventProps[];
} => {
  const events = normalizeEvents(data);

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

  return { filteredCities, events };
};
