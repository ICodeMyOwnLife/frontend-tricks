export const filterNull = <TObject extends object>(o: TObject) =>
  Object.fromEntries(
    Object.entries(o).filter(
      ([, value]) => value !== null && value !== undefined,
    ),
  ) as Partial<TObject>;
