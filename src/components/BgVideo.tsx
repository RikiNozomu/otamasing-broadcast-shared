/**
 * The สนทนาม้าซิ่ง tile background: navy logo tiles drifting up, 30 px a second.
 * Not a <video> any more: one strip of tiles (1920x542, one repeat of the old loop video) moved with a transform,
 * which the GPU does without decoding or repainting, so OBS Browser Sources keep their frame rate.
 * Every copy starts at the same point, worked out from the clock, so a scene change (two scenes on screen at once)
 * and the other Browser Sources (#/race-now) never show the tiles out of step.
 */
import { useEffect, useRef } from "react";
import tile from "../assets/bg-tile-navy.webp";
import { cx } from "../lib/cx";

const TILE_H = 542; // px, one vertical repeat of the tiles
const PERIOD_MS = 18067; // the time the tiles take to move up one repeat

export function BgVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const a = ref.current?.animate([{ transform: "translateY(0)" }, { transform: `translateY(-${TILE_H}px)` }], { duration: PERIOD_MS, iterations: Infinity });
    if (a) a.currentTime = Date.now() % PERIOD_MS;
    return () => a?.cancel();
  }, []);
  return (
    <div aria-hidden="true" data-testid="bg-video" className={cx("pointer-events-none absolute inset-0 overflow-hidden bg-scene", className)}>
      <div ref={ref} className="absolute inset-x-0 top-0 will-change-transform"
        style={{ height: `calc(100% + ${TILE_H}px)`, backgroundImage: `url(${tile})`, backgroundSize: `1920px ${TILE_H}px`, backgroundPosition: "center top", backgroundRepeat: "repeat" }} />
    </div>
  );
}
