export declare const SCHEMES: readonly ["jra", "us", "hk", "gb", "fr", "plain", "custom"];
export type Scheme = (typeof SCHEMES)[number];

export declare const WEATHERS: {
  readonly sunny: "Sunny"; readonly partly: "Partly Cloudy"; readonly cloudy: "Cloudy"; readonly fog: "Fog";
  readonly drizzle: "Drizzle"; readonly rain: "Rain"; readonly snow: "Snow"; readonly storm: "Thunderstorm";
};
export type Weather = keyof typeof WEATHERS;
export declare const WEATHER_KEYS: [Weather, ...Weather[]];
