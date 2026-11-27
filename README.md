# otamasing-broadcast-shared

Shared assets and code for the OBS broadcast overlays
[otamasing-broadcast-compact](https://github.com/RikiNozomu/otamasing-broadcast-compact) and
[otamasing-broadcast-intro](https://github.com/RikiNozomu/otamasing-broadcast-intro):
logo, background video, weather icons, flags/centre badges, number and draw colours, and the shared race JSON pieces.

Both apps install it straight from GitHub by tag:

```json
"@otamasing/broadcast-shared": "github:RikiNozomu/otamasing-broadcast-shared#v0.1.0"
```

## What is inside

| Import | What |
|---|---|
| `@otamasing/broadcast-shared/theme.css` | Tailwind v4 `@theme` tokens (colours, `font-display`, `font-body`) and `@source` for the shared components |
| `@otamasing/broadcast-shared/fonts.css` | Otamasing Display / Otamasing Sans (Thai, English, Japanese) and IBM Plex Mono bold (draw / horse numbers) |
| `components/BgVideo` | สนทนาม้าซิ่ง navy tile video background, kept in step from the clock |
| `components/Logo` | all-white สนทนาม้าซิ่ง logo |
| `components/WeatherLogo` | Figma weather logos (sunny, cloudy, rain, snow) |
| `components/Silks`, `components/SilksPicker` | owner / stable silks pictures (130 PNGs from the Figma "Silk" component) and the dock picker; list in `lib/silks` |
| `components/Flag` | flag by ISO code, MIHO / RITTO badges |
| `components/FitText`, `Button`, `Switch`, `Section`, `PageButtons` | small UI pieces of the dock and overlay |
| `data` | plain-JS lists used by the race JSON schema: `SCHEMES`, `WEATHERS`, `WEATHER_KEYS` |
| `lib/colors` | number and draw colour schemes (JRA, US, HK, GB, FR, custom), grade and Fav colours |
| `lib/nations`, `lib/flags`, `lib/weather`, `lib/cycle`, `lib/cx`, `lib/download` | shared data and helpers |
| `assets/*` | the raw files (logo SVG, weather SVGs, background video) |

The package is TypeScript source; the app's Vite compiles it. Each app needs:

```css
/* src/styles/app.css */
@import "tailwindcss";
@import "@otamasing/broadcast-shared/theme.css";
```

```ts
// vite.config.ts
optimizeDeps: { exclude: ["@otamasing/broadcast-shared"] },
test: { server: { deps: { inline: ["@otamasing/broadcast-shared"] } } },
```

## Releasing

Change the files on a branch, merge to `main`, push a tag `vX.Y.Z`, then bump the `#vX.Y.Z` in both apps' `package.json`.
