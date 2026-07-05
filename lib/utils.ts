type ClassValue = string | number | null | boolean | undefined | ClassValue[];

function flatten(input: ClassValue[], out: string[]) {
  for (const item of input) {
    if (!item) continue;
    if (Array.isArray(item)) flatten(item, out);
    else out.push(String(item));
  }
}

/**
 * Minimal classnames combiner. Kept dependency-free on purpose —
 * swap for `clsx` + `tailwind-merge` later if class conflicts start
 * to matter (e.g. conditionally overriding padding utilities).
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  flatten(inputs, out);
  return out.join(" ");
}