function fibonacci(n: number): number {
    if (n == 1) return 0;
    if (n == 2) return 1;

    let nm1f = fibonacci(n - 1);
    let nm2f = fibonacci(n - 2);

    let myAns = nm1f + nm2f;
    return myAns;
}

console.log(fibonacci(8));
