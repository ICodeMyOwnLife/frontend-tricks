declare module '*.md' {
  const src: string;
  export default src;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}

type UseStateInitialValue<TValue> = TValue | ReturnedFunction<TValue>;

type TypedFunction<TParams extends any[], TReturn = void> = (
  ...args: TParams
) => TReturn;

type ReturnedFunction<TReturn> = TypedFunction<[], TReturn>;

type GeneralFunction = TypedFunction<any[], any>;

type PickFrom<TObject, TKey extends keyof TObject> = Pick<TObject, TKey>;

type OmitFrom<TObject, TKey extends keyof TObject> = Omit<TObject, TKey>;

type Defined<T> = T extends undefined ? never : T;

type ValueOf<T> = T[keyof T];
