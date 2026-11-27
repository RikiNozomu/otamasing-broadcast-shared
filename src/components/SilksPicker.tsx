/** Dock control: pick an owner's silks by name (A to Z, "" = none), with the picture beside the list. */
import { SILKS } from "../lib/silks";
import { cx } from "../lib/cx";
import { Silks } from "./Silks";

export function SilksPicker({ value, onChange, id, selectClassName }: { value: string; onChange: (name: string) => void; id?: string; selectClassName?: string }) {
  // a name from an older file that is not in the list stays selectable, so it is not lost by opening the dock
  const unknown = value && !SILKS.some(([n]) => n === value);
  return (
    <span className="flex items-center gap-2">
      <select id={id} className={cx("min-w-0 flex-1", selectClassName)} value={value} onChange={(e) => onChange(e.target.value)} data-testid="silks-picker">
        <option value="">ไม่มีลายเสื้อ</option>
        {unknown && <option value={value}>{value} (ไม่มีภาพ)</option>}
        {SILKS.map(([n]) => <option key={n} value={n}>{n}</option>)}
      </select>
      <Silks name={value} className="h-10 w-12" testId="silks-preview" />
    </span>
  );
}
