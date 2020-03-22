import { LoremIpsum } from 'lorem-ipsum';

const loremIpsum = new LoremIpsum({ wordsPerSentence: { min: 8, max: 20 } });

const generateDescription = () => loremIpsum.generateSentences(1);

const generateId = () =>
  Math.random()
    .toString()
    .substr(2, 8)
    .padStart(12, '0');

const generateName = () =>
  loremIpsum.generateWords(Math.ceil(Math.random() / 0.5)).toUpperCase();

export const load = (count: number) =>
  new Promise<Product[]>(resolve =>
    setTimeout(
      () =>
        resolve(
          Array.from({ length: count }, () => ({
            id: generateId(),
            name: generateName(),
            description: generateDescription(),
          })),
        ),
      2000,
    ),
  );

export interface Product {
  id: string;
  name: string;
  description: string;
}
