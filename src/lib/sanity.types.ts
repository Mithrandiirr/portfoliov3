export type Homepage = {
  loop: Loop;
};
export type Loop = {
  techStacks: TechStacks[];
  techStacksReversed: TechStacks[];
};
export type TechStacks = {
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _key: string;
  _type: string;
};
