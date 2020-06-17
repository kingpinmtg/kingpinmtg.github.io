export function substringsBetween(start, end, str) {
    let matches = [];

    while (str.indexOf(start) !== -1 && str.indexOf(end) !== -1) {
        const current = str.substring(str.indexOf(start)+start.length, str.indexOf(end));
        const remove = start + current + end;
        str = str.split(remove).pop();
        matches.push(current);
    }

    return matches;
}