export function callableObject() {
  const o = Object.assign((n1: number, n2: number) => n1 + n2, {
    b: 2,
    c: 3,
  });

  return {
    type: typeof o,
    result: o(o.b, o.c),
  };
}

export function fromEntries() {
  const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]);
  const o1 = Object.fromEntries(map);

  const array = [
    ['x', 'X'],
    ['y', 'Y'],
    ['z', 'Z'],
  ];
  const o2 = Object.fromEntries(array);

  function* createGenerator() {
    for (let i = 1; i <= 3; ++i) {
      yield [i, i * 2];
    }
  }
  const generator = createGenerator();
  const o3 = Object.fromEntries(generator);

  return [o1, o2, o3];
}
