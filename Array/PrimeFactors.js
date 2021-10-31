function Factors(num) {
    const primes = [];
    for (let number = 2; number <= num; number++) {
      while ((num % number) === 0) {
        primes.push(number);
        num /= number;
      }
    }
    return primes;
  } 
  console.log("Prime factors are: ",Factors(120));