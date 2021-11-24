export const one = (args) => {
  let max = 0;
  for (let a of args) {
    max += a;
  }

  return max;
};
