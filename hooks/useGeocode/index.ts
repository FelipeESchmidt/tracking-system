"use client";

import Geocode from "react-geocode";
import { GeocodeResponse } from "@/types";

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY!);
Geocode.setLanguage("pt-br");
Geocode.setRegion("br");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

export const useGeocode = () => {
  const findLatAndLngFromCity = async (city: string, state: string) =>
    await Geocode.fromAddress(`${city} ${state}`).then(
      (response: GeocodeResponse) => {
        const { lat, lng } = response.results[0].geometry.location;
        return { lat, lng };
      },
      (error) => Promise.reject(error)
    );

  return { findLatAndLngFromCity };
};
