import Geocode from "react-geocode";
import {
  ITrackingInfoCityProps,
  GeocodeResponse,
  ITrackingInfoCityWithCoordinatesProps,
} from "@/types";

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY!);
Geocode.setLanguage("pt-br");
Geocode.setRegion("br");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const findLatAndLngFromCity = async (city: string, state: string) =>
  await Geocode.fromAddress(`${city} ${state}`).then(
    (response: GeocodeResponse) => {
      const { lat, lng } = response.results[0].geometry.location;
      return { lat, lng };
    },
    (error) => Promise.reject(error)
  );

export const fetchCoordinatesFromCities = async (
  cities: ITrackingInfoCityProps[]
) => {
  const citiesTrackingInfoWithCoordinates: ITrackingInfoCityWithCoordinatesProps[] =
    await Promise.all(
      cities.map(async (cityTrackingInfo) => {
        const coordinates = await findLatAndLngFromCity(
          cityTrackingInfo.city,
          cityTrackingInfo.state
        );
        return { ...cityTrackingInfo, coordinates };
      })
    );

  return citiesTrackingInfoWithCoordinates;
};
