/* eslint-disable no-var */
/* eslint-disable vars-on-top */
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

interface MemoryInfo {
  jsHeapSizeLimit: number;
  totalJSHeapSize: number;
  usedJSHeapSize: number;
}

interface Performance {
  memory: MemoryInfo;
}
