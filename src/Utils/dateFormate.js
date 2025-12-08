
function getFormattedDate(value, inMs = false) {
    if (!value) return value

    let date;

    if (typeof value === 'string') {
        date = new Date(value);
    } else {
        date = new Date(inMs ? value : value * 1000);
    }

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }


    return new Intl.DateTimeFormat('en-us', options).format(date)
}

export default getFormattedDate;