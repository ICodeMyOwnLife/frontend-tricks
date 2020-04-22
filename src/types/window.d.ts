interface Blob {
  arrayBuffer: () => Promise<ArrayBuffer>;
  stream: () => ReadableStream;
  text: () => Promise<string>;
}

interface Clipboard {
  read: () => Promise<ClipboardItem[]>;
  write: (items: ClipboardItem[]) => Promise<void>;
}

declare var ClipboardItem: {
  prototype: ClipboardItem;
  new (init: { [type: string]: Blob }): ClipboardItem;
};

interface ClipboardItem {
  types: string[];
  getType: (type: string) => Promise<Blob>;
}

declare namespace Intl {
  interface ListFormatOptions {
    localeMatcher?: string;
    style?: string;
    type?: string;
  }

  var ListFormat: {
    new (locales?: string | string[], options?: ListFormatOptions): ListFormat;
  };

  interface ListFormat {
    format: (list: string[]) => string;
  }

  interface RelativeTimeFormatOptions {
    localeMatcher?: string;
    numeric?: string;
    style?: string;
  }

  var RelativeTimeFormat: {
    new (
      locales?: string | string[],
      options?: RelativeTimeFormatOptions,
    ): RelativeTimeFormat;
  };
}

interface RelativeTimeFormat {
  format: (value: number, unit: string) => string;
}

interface MemoryInfo {
  jsHeapSizeLimit: number;
  totalJSHeapSize: number;
  usedJSHeapSize: number;
}

interface Performance {
  memory: MemoryInfo;
}

interface Window {
  mozRTCPeerConnection: typeof window.RTCPeerConnection;
}
