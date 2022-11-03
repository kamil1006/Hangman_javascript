function getRandom() {
// Write your code here
    let min = 0;
    let max = 4 + 1;
    return Math.floor(Math.random() * (max - min)) + min;
}