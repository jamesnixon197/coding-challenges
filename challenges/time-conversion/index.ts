type partsOfTime = {
    hour: string;
    minute: string;
    second: string;
    timeType: 'AM' | 'PM';
};

export default (time: string): string => {
    const timeSplit = time.match(/^(\d{2}):(\d{2}):(\d{2})(am|pm)$/i);

    if (timeSplit) {
        const timeParts: partsOfTime = {
            hour: timeSplit[1],
            minute: timeSplit[2],
            second: timeSplit[3],
            timeType: (timeSplit[4].toUpperCase() as 'AM'|'PM')
        };

        if (timeParts.hour == '12' && timeParts.timeType == 'AM')
            timeParts.hour = '00';

        if (timeParts.timeType == 'PM') {
            timeParts.hour = `${(+timeParts.hour % 12) + 12}`;
        }

        return `${timeParts.hour}:${timeParts.minute}:${timeParts.second}`;
    } else {
        throw new Error('Invalid time string passed in')
    }
}
