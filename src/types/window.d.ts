interface Blob {
  arrayBuffer: () => Promise<ArrayBuffer>;
  stream: () => ReadableStream;
  text: () => Promise<string>;
}

interface Clipboard {
  read: () => Promise<ClipboardItem[]>;
  write: (items: ClipboardItem[]) => Promise<void>;
}

interface ClipboardItem {
  types: string[];
  getType: (type: string) => Promise<Blob>;
}

declare var ClipboardItem: {
  prototype: ClipboardItem;
  new (init: { [type: string]: Blob }): ClipboardItem;
};

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

interface MemoryInfo {
  jsHeapSizeLimit: number;
  totalJSHeapSize: number;
  usedJSHeapSize: number;
}

interface Performance {
  memory: MemoryInfo;
}
