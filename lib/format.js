export function getMonth(monthNumber) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthNumber - 1];
}

export function getAbbreviatedMonth(monthNumber) {
    return getMonth(monthNumber).slice(0, 3);
}
