function getRandom() {
// Write your code here
    let min = 1;
    let max = 3+1;
    return Math.floor(Math.random() * (max - min)) + min;
}