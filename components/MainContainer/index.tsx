"use client";

import React, { useEffect, useState } from "react";

import { TrackingInfo } from "../TrackingInfo";
import { ContainerSteps } from "./types";
import { useTrackingInfo } from "@/context/TrackingInfoContext";

export const MainContainer = () => {
  const { info } = useTrackingInfo();
  const [step, setStep] = useState(ContainerSteps.INITIAL);

  const renderBasedOnStep = () => {
    switch (step) {
      case ContainerSteps.INITIAL:
        return <></>;

      case ContainerSteps.LOADED:
        return <TrackingInfo />;
    }
  };

  useEffect(() => {
    if (!info.length) return setStep(ContainerSteps.INITIAL);
    return setStep(ContainerSteps.LOADED);
  }, [info]);

  return renderBasedOnStep();
};
