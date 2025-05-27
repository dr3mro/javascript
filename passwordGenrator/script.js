function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allllChars = '';
    let password = '';
    if (includeUppercase) {
        allllChars += uppercaseChars;
    }
    if (includeLowercase) {
        allllChars += lowercaseChars;
    }
    if (includeNumbers) {
        allllChars += numberChars
    }
    if (includeSymbols) {
        allllChars += symbolChars;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allllChars.length);
        password += allllChars.charAt(randomIndex);
    }
    return password;
}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
document.writeln(`Genearted Password: ${password}`);