function transformString(input) {
    const len = input.length;
    
    if (len % 15 === 0) {
        // Divisible by 15: Reverse and then replace with ASCII codes
        return input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 3 === 0) {
        // Divisible by 3: Reverse the string
        return input.split('').reverse().join('');
    } else if (len % 5 === 0) {
        // Divisible by 5: Replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If not divisible by 3 or 5, return the string as is
        return input;
    }
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
