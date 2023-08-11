const iterableNum = 158636;

iterableNum[Symbol.iterator] = function () {
  const iterableString = String(iterableNum);
  return {
    current: iterableString[0],
    range: iterableString.length,
    counter: 0,

    next() {
      if (this.counter < this.range) {
        return { done: false, value: iterableString[this.counter++] };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of iterableNum) {
  console.log(num);
}
