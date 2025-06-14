export function range(length: number): number[];
export function range(start: number, end: number, step?: number): number[];
export function range(start: number, end?: number, step = 1): number[] {
  const output = [];

  if (end === undefined) {
    for (let i = 0; i < start; i++) {
      output.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
  }

  return output;
}
