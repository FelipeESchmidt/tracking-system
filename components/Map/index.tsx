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
      defaultZoom={5}
      defaultCenter={currentLocation || { lat: -14.924578, lng: -52.441181 }}
      options={{
        mapId,
      }}
    >
      {!!currentLocation && <Marker position={currentLocation} />}
      <Polyline
        path={complete.map(({ coordinates }) => ({ ...coordinates }))}
        options={{
          strokeColor: "#0088FF",
          strokeWeight: 6,
          strokeOpacity: 0.6,
          defaultVisible: true,
        }}
      />
      <Polyline
        path={incomplete.map(({ coordinates }) => ({ ...coordinates }))}
        options={{
          strokeColor: "#ffbb00",
          strokeWeight: 6,
          strokeOpacity: 0.6,
          defaultVisible: true,
        }}
      />
    </CGoogleMap>
  );
});
