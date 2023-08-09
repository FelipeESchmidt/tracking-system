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
import { GoogleMapWithChildrenType, IMapComposedProps } from "@/types";
import { useCitiesTracking } from "@/hooks/useCitiesTracking";
import { useTrackingInfo } from "@/context/TrackingInfoContext";

import styles from "./map.module.css";
import {
  defaultCenterCoordinates,
  defaultPolylineProps,
  defaultZoom,
} from "./constants";

const CGoogleMap = GoogleMap as GoogleMapWithChildrenType;

export const Map: IMapComposedProps = compose(
  withProps(({ mapId }: IMapComposedProps) => ({
    mapId,
    googleMapURL: mapsUrl,
    loadingElement: <div className={styles.map_loading} />,
    containerElement: <div className={styles.map_container} />,
    mapElement: <div className={styles.map_element} />,
  })),
  withScriptjs,
  withGoogleMap
)(({ mapId }: IMapComposedProps) => {
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
        disableDefaultUI: true,
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
