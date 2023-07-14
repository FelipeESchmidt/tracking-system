import { NextApiRequest, NextApiResponse } from "next";

import { fetchCoordinatesFromCities, fetchTrackingInfo } from "@/services/api";

const validateErrors = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).json({ error: "Invalid Method!" });
    return true;
  }

  const { code } = req.body;

  if (!code) {
    res.status(400).json({ error: "Invalid Code!" });
    return true;
  }

  return false;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const logFunction = console.log;
  console.log = function () {};
  try {
    if (validateErrors(req, res)) {
      return res.end();
    }

    const { code } = req.body;
    const filteredCities = await fetchTrackingInfo(code);
    const citiesWithCoords = await fetchCoordinatesFromCities(filteredCities);

    res.status(200).json(citiesWithCoords);
  } catch (error) {
    res.status(400).json({ error });
  } finally {
    console.log = logFunction;
  }
};

export default handler;
