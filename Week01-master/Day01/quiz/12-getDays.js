/** Display year is kabisat and display month */

function getDays(month, year) {
    if (!Number.isInteger(month) && !Number.isInteger(year)) {
        return "inputan bulan & tahun harus dalam integer";
    } else if (!Number.isInteger(month)) {
        return "inputan bulan harus dalam integer";
    } else if (!Number.isInteger(year)) {
        return "inputan tahun harus dalam integer";
    } else {

        //switch case day
        switch (month) {
            case 1: {
                month = '1';
                day = 31;
            }
            break;
        case 2: {
            month = '2';
            day = 28;
        }
        break;
        case 3: {
            month = '3';
            day = 30;
        }
        break;
        case 4: {
            month = '4';
            day = 31;
        }
        break;
        case 5: {
            month = '5';
            day = 30;
        }
        break;
        case 6: {
            month = "6";
            day = 31;
        }
        break;
        case 7: {
            month = '7';
            day = 30;
        }
        break;
        case 8: {
            month = '8';
            day = 31;
        }
        break;
        case 9: {
            month = '9';
            day = 30;
        }
        break;
        case 10: {
            month = '10';
            day = 31;
        }
        break;
        case 11: {
            month = '11';
            day = 30;
        }
        break;
        case 12: {
            month = '12';
            day = 31;
        }
        break;
        }

        //Satu tahun adalah tahun kabisat jika kondisi berikut dipenuhi:

        // Tahun adalah kelipatan dari 400.
        // Tahun adalah kelipatan dari 4 dan bukan kelipatan 100.

        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {

            if (month = 2) {
                day = day + 1;
            }
            return 'this month has ' + day + ' days, ' + year + ' adalah tahun kabisat';
        }

    }
    return 'this month has ' + day + ' hari';
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays(2, "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year")); //inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari