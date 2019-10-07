declare module '*.mp4' {
  const src: string;
  export default src;
}

type UseStateInitialValue<TValue> = TValue | ReturnedFunction<TValue>;

type TypedFunction<TParams, TReturn = void> = (...args: TParams) => TReturn;

type ReturnedFunction<TReturn> = TypedFunction<[], TReturn>;

type OmitFrom<TObject, TKey extends keyof TObject> = Omit<TObject, TKey>;
