// Plain JavaScript (with data.d.ts) so the apps' schema scripts can load it in Node, which does not strip
// TypeScript types from files under node_modules.

/** Colour schemes of the DRAW and NO. boxes (race JSON `style.drawScheme` / `style.numberScheme`). */
export const SCHEMES = /** @type {const} */ (["jra", "us", "hk", "gb", "fr", "plain", "custom"]);

/** Weather words of a race; the overlays show them as the Figma weather logo. */
export const WEATHERS = /** @type {const} */ ({
  sunny: "Sunny", partly: "Partly Cloudy", cloudy: "Cloudy", fog: "Fog", drizzle: "Drizzle", rain: "Rain", snow: "Snow", storm: "Thunderstorm",
});
export const WEATHER_KEYS = Object.keys(WEATHERS);
