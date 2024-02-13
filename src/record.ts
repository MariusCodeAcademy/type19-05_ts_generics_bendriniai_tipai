// Record<Keys, Types>

type States = {
  loading: boolean;
  error: string;
  ready: boolean;
};

// type OptionalStates = Partial<States>;

type OptionalStates = {
  [Property in keyof States]?: States[Property];
};

// type LodingAndReadyOnly = Omit<States, 'error'>;

type LodingAndReadyOnly = {
  [Property in keyof Omit<States, 'error'>]: boolean | 1 | 0;
};

type PossibleStateNumbers = 0 | 1 | 2;

const rezult: Record<PossibleStateNumbers, OptionalStates> = {
  0: { loading: true, ready: false },
  1: { error: 'system error', ready: false },
  2: { ready: true },
};
