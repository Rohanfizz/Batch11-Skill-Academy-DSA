function factorial(n: number): number {
    if (n == 1) return 1;
    let nm1f = factorial(n - 1);//faith
    return nm1f * n;            // expectation
}

console.log(factorial(6));
