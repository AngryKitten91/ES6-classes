class X {
    static fn(...args) {
        return Math.max(...args);
    }
}

console.log(X.fn(1, 2, 400, 4, 5));
