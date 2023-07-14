"use client";

import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
  Marker,
} from "react-google-maps";
import { mapsUrl } from "@/services/maps";
import { GoogleMapWithChildrenType } from "@/types";
import { useCitiesTracking } from "@/hooks/useCitiesTracking";
import { useTrackingInfo } from "@/context/TrackingInfoContext";

import {
  defaultCenterCoordinates,
  defaultPolylineProps,
  defaultZoom,
} from "./constants";

const CGoogleMap = GoogleMap as GoogleMapWithChildrenType;

const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;

export const Map = compose(
  withProps({
    googleMapURL: mapsUrl,
    loadingElement: <div style={{ height: `100%`, width: "100%" }} />,
    containerElement: <div style={{ height: `800px`, width: "100%" }} />,
    mapElement: <div style={{ height: `100%`, width: "100%" }} />,
  }),
  withScriptjs,
  withGoogleMap
)(() => {
  const { info } = useTrackingInfo();
  const { createRoutes } = useCitiesTracking();

  const { complete, incomplete } = createRoutes(info);

  const hasIncomplete = incomplete.length;

  const currentLocation = hasIncomplete
    ? { ...incomplete.slice(-1)[0].coordinates }
    : null;

  return (
    <CGoogleMap
      defaultZoom={defaultZoom}
      defaultCenter={currentLocation || defaultCenterCoordinates}
      options={{
        mapId,
      }}
    >
      {!!currentLocation && <Marker position={currentLocation} />}
      <Polyline
        path={complete.map(({ coordinates }) => ({ ...coordinates }))}
        options={{
          ...defaultPolylineProps,
          strokeColor: "#0088FF",
        }}
      />
      <Polyline
        path={incomplete.map(({ coordinates }) => ({ ...coordinates }))}
        options={{
          ...defaultPolylineProps,
          strokeColor: "#ffbb00",
        }}
      />
    </CGoogleMap>
  );
});
