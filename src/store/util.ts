export const compose = (...fns: any[]) => {
  if (fns.length === 0) {
    return (arg: any) => arg;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((a: any, b: any) => (...args: any[]) => a(b(...args)));
};
