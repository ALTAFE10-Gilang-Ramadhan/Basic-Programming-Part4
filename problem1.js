function primeX(number) {
  let temp = [],
    result = [];
  for (let i = 2; i <= 100; i++) {
    if (!temp[i]) {
      result.push(i);
      for (let j = i; j <= 100; j += i) {
        //j+=i ==> j+1+1+1+1+1...
        temp[j] = true;
      }
    }
  }
  return result.slice(number - 1, number);
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71
