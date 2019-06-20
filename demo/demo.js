let arr = [1, 2, 3, 4, 5];
arr.forEach(v => {
    if (v === 3) {
        return;
    }
    console.log(v);
});
