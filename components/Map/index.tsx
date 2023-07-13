"use client";

import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
} from "react-google-maps";
import { GoogleMapWithChildrenType } from "@/types";
import { mapsUrl } from "@/services/maps";
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

  return (
    <CGoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: -14.924578, lng: -52.441181 }}
      options={{
        mapId,
      }}
    >
      <Polyline
        path={info.map(({ coordinates }) => ({ ...coordinates }))}
        options={{
          strokeColor: "#0088FF",
          strokeWeight: 6,
          strokeOpacity: 0.6,
          defaultVisible: true,
        }}
      />
    </CGoogleMap>
  );
});
