/** The silks picture of an owner / stable (lib/silks), or nothing for "" or an unknown name. Size comes from className. */
import { silksUrl } from "../lib/silks";
import { cx } from "../lib/cx";

export function Silks({ name, className, testId = "silks" }: { name: string; className?: string; testId?: string }) {
  const url = silksUrl(name);
  return url ? <img src={url} alt={name} data-testid={testId} data-silks={name} className={cx("block flex-none object-contain", className)} /> : null;
}
