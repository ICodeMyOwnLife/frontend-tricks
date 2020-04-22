export interface ItemData {
  type: string;
  kind: string;
  dataFile?: File;
  dataString?: string;
}

export interface DragData {
  data: ItemData[];
  dropEffect: string;
  effectAllowed: string;
}

export interface CustomItemData {
  size: 'small' | 'medium' | 'large';
  value: number;
}
