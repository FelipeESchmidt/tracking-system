import React from "react";
import { GoogleMapProps } from "react-google-maps";

export interface IWithChildren {
  children: React.ReactNode;
}

export interface ICityProps {
  city: string;
  state: string;
  country?: string;
}

export interface ITrackingInfoCityProps extends ICityProps {
  hasGone: boolean;
}

export interface ITrackingInfoCityWithCoordinatesProps
  extends ITrackingInfoCityProps {
  coordinates: Coordinates;
}

export interface ITrackingInfoStateProps {
  info: ITrackingInfoCityWithCoordinatesProps[];
}

export interface IEventProps {
  tipo: string;
  status: string;
  data: string;
  hora: string;
  descricao: string;
  local: string;
  codigo: string;
  cidade: string;
  uf: string;
  destino?: {
    local: string;
    codigo: string;
    cidade: string;
    bairro: string;
    uf: string;
  };
}

export interface IPackageProps {
  numero: string;
  sigla: string;
  nome: string;
  categoria: string;
  evento: IEventProps[] | IEventProps;
}

export type GoogleMapWithChildrenType = React.ComponentType<
  GoogleMapProps & { children?: React.ReactNode }
>;

interface Coordinates {
  lat: number;
  lng: number;
}

interface NestedBounds {
  northeast: {
    northeast: Coordinates;
    southwest: Coordinates;
  };
  southwest: {
    northeast: Coordinates;
    southwest: Coordinates;
  };
}

interface Result {
  address_components: {
    long_name: string;
    short_name: string;
    types: string[];
  }[];
  formatted_address: string;
  geometry: {
    bounds: NestedBounds;
    location: {
      lat: number;
      lng: number;
    };
    location_type: string;
    viewport: NestedBounds;
  };
  place_id: string;
  types: string[];
}

export interface GeocodeResponse {
  results: Result[];
  status: string;
}
