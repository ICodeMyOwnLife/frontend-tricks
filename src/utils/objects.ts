export const filterNull = <TObject extends object>(
  o: TObject,
): Partial<TObject> =>
  Object.fromEntries(
    Object.entries(o).filter(
      ([, value]) => value !== null && value !== undefined,
    ),
  );
