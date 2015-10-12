var hours = process.argv[2];
var minutes = process.argv[3];
var arab = [1, 4, 5, 9, 10, 40, 50];
var roman = ["I", "IV", "V", "IX", "X", "XL", "L"];
var result = "";
if (hours > 23 || minutes > 59 || hours < 0 || minutes < 0) {
    process.stdout.write("Время указано не верно");
    return;
};
if(hours == 0 && minutes == 0){
    process.stdout.write('---');
    return;
}
var n = arab.length - 1;
function f (number){
    while (number > 0) {
        if (number >= arab[n]) {
            result += roman[n];
            number -= arab[n];
        } else {
            n--;
        }
    }
}
f(hours);
result += ":";
var n = arab.length - 1;
f(minutes);
process.stdout.write(result);
