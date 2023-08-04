"use client";

import React, { useEffect, useState } from "react";

import { Map } from "../Map";
import { useTheme } from "@/hooks/useTheme";

const mapDarkId = process.env.NEXT_PUBLIC_GOOGLE_MAP_DARK_ID;
const mapLightId = process.env.NEXT_PUBLIC_GOOGLE_MAP_LIGHT_ID;

export const MapWrapper = () => {
  const [reload, setReload] = useState(false);
  const { isDark } = useTheme();

  const mapId = isDark ? mapDarkId : mapLightId;

  useEffect(() => {
    if (!reload) return;
    setReload(false);
  }, [reload]);

  useEffect(() => {
    setReload(true);
  }, [isDark]);

  if (reload) return <></>;

  return <Map mapId={mapId} />;
};
