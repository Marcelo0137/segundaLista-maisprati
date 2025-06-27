
function ehDataValida(day, month, year) {
    if (day <= 0 || day > 31 || month > 12 || month <= 0 || year <= 0) {
        return false
    }

    let daysInMonth

    const bissexto = (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31
            break;
        case 2:
            daysInMonth = bissexto ? 29 : 28
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30
            break;
        default:
            return false;
    }

    return day <= daysInMonth;


}

console.log(ehDataValida(15, 2, 2016))
console.log(ehDataValida(50, 10, 2018))
console.log(ehDataValida(30, 11, 1999))
console.log(ehDataValida(7, 20, 2016))



