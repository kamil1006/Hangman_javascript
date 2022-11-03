function getRomanNumber(array) {
// Write your code here
    const romanNumbers = ["I", "II", "III", "IV", "V"];
    let min = 1;
    let max = 3 + 1 + 1;
    return romanNumbers[Math.floor(Math.random() * (max - min)) + min];


}