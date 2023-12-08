console.log(dateChecker('01-09-2016 01:20')); // Выведет: true
console.log(dateChecker('30-02-2020 24:00')); // Выведет: false


function dateChecker(dateString) {
    // Проверяем общий формат строки
    if (!/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/.test(dateString)) {
        return false;
    }

    // Извлекаем компоненты даты и времени
    let [date, time] = dateString.split(' ');
    let [dd, MM, yyyy] = date.split('-').map(Number);
    let [hh, mm] = time.split(':').map(Number);

    // Проверяем диапазоны каждого компонента
    if (hh < 0 || hh > 23 || mm < 0 || mm > 59) {
        return false;
    }

    if (yyyy < 0 || MM < 1 || MM > 12 || dd < 1 || dd > 31) {
        return false;
    }

    // Проверяем число дней в месяце
    if (MM === 2) {
        // Февраль
        if (yyyy % 4 === 0 && (yyyy % 100 !== 0 || yyyy % 400 === 0)) {
            // Високосный год
            if (dd > 29) {
                return false;
            }
        } else if (dd > 28) {
            return false;
        }
    } else if ([4, 6, 9, 11].includes(MM) && dd > 30) {
        // Месяцы с 30 днями
        return false;
    }

    return true;
}
