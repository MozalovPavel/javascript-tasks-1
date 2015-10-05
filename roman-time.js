var hours = process.argv[2];
var minutes = process.argv[3];
var arab = [1, 4, 5, 9, 10, 40, 50];
var roman = ["I", "IV", "V", "IX", "X", "XL", "L"];
var rezult = "";
if (hours > 23 || minutes > 59 || hours < 0 || minutes < 0) {
    process.stdout.write("Время указано не верно");
    return;
};
var n = arab.length - 1;
while (hours > 0) {
    if (hours >= arab[n]) {
        rezult += roman[n];
        hours -= arab[n];
    }
    else n--;
}
rezult += ":";
var n = arab.length - 1;
while (minutes > 0) {
    if (minutes >= arab[n]) {
        rezult += roman[n];
        minutes -= arab[n];
    }
    else n--;
}
process.stdout.write(rezult);
