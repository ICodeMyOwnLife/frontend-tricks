declare module 'mq2json' {
  export type QueryObject = {
    [k: string]: string | number;
  };

  export default function mq2json(query: QueryObject): string;
}
