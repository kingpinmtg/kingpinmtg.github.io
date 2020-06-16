// this will be information that can't be sorted easily
unsortable = [
    'All cards that mention "ante"',
    'All cards that have "Conspiracy" in the type line',
]

window.onload = () => {
    const banlist = document.getElementById("banList");

    fetch("../banlist.txt").then( (response) => {
        return response.text();
    }).then( (data) => {
        let splitData = data.split("\n");
        splitData = splitData.sort();

        const fullList = unsortable.concat(splitData);
        fullList.forEach( (element) => {
            const listEntry = document.createElement("li");
            listEntry.innerText = element;
            banlist.append(listEntry);
        });
    });
}

