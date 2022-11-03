// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = (...args) => {
  console.log(args.length);
};

numArgs(1, 43);
