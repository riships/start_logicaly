var num = 1234321;
var rev = '';

while (num > 0) {
    let temp = num % 10;
    rev = rev * 10 + temp;
    num = (num - temp) / 10;
}
if (num === rev) {
    console.log('This number is palindrome ' + rev);
}
else {
    console.log('This number is not palindrome ' + rev);
}