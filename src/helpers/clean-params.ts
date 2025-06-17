export function cleanParams<T extends Record<string, unknown>>(
  params: T
): Partial<T> {
  const cleanedEntries = Object.entries(params).filter(
    ([, value]) => value !== null && value !== ''
  );

  return cleanedEntries.reduce((acc, [key, value]) => {
    acc[key as keyof T] = value as T[keyof T];
    return acc;
  }, {} as Partial<T>);
}
