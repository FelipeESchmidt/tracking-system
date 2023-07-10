"use client";

import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { GoogleMapWithChildrenType } from "@/types";
import { mapsUrl } from "@/services/maps";

const CGoogleMap = GoogleMap as GoogleMapWithChildrenType;

const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;

export const Map = compose(
  withProps({
    googleMapURL: mapsUrl,
    loadingElement: <div style={{ height: `100%`, width: "100%" }} />,
    containerElement: <div style={{ height: `400px`, width: "100%" }} />,
    mapElement: <div style={{ height: `100%`, width: "100%" }} />,
  }),
  withScriptjs,
  withGoogleMap
)(() => (
  <CGoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    options={{
      mapId,
    }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </CGoogleMap>
));
