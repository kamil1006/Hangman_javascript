function isPalindrome(userStr) {
    for (let letter = 0; letter < userStr.length / 2; letter++) {
        if (userStr.charAt(userStr.length - 1 - letter) !== userStr.charAt(letter)) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("javascript"));