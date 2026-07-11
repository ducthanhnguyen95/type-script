interface Product {
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  // Index signature
  // keyof
  readonly [K in keyof Product]: Product[K];
};

let product: ReadOnlyProduct = {
  name: "a",
  price: 1,
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
