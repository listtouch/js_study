const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  console.log(111);
  return NaN;
};

module.exports = { add  };

