declare module '*.mp4' {
  const src: string;
  export default src;
}

declare namespace Intl {
  interface ListFormatOptions {
    localeMatcher?: string;
    style?: string;
    type?: string;
  }

  interface ListFormat {
    format: (list: string[]) => string;
  }

  var ListFormat: {
    new (locales?: string | string[], options?: ListFormatOptions): ListFormat;
  };

  interface RelativeTimeFormatOptions {
    localeMatcher?: string;
    numeric?: string;
    style?: string;
  }

  interface RelativeTimeFormat {
    format: (value: number, unit: string) => string;
  }

  var RelativeTimeFormat: {
    new (
      locales?: string | string[],
      options?: RelativeTimeFormatOptions,
    ): RelativeTimeFormat;
  };
}

type UseStateInitialValue<TValue> = TValue | ReturnedFunction<TValue>;

type TypedFunction<TParams extends any[], TReturn = void> = (
  ...args: TParams
) => TReturn;

type ReturnedFunction<TReturn> = TypedFunction<[], TReturn>;

type GeneralFunction = TypedFunction<any[], any>;

type OmitFrom<TObject, TKey extends keyof TObject> = Omit<TObject, TKey>;

type Defined<T> = T extends undefined ? never : T;

type ValueOf<T> = T[keyof T];
