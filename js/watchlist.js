// this will be information that can't be sorted easily
unsortable = []

window.onload = () => {
    const watchlist = document.getElementById("watchList");

    fetch("../watchlist.txt").then( (response) => {
        return response.text();
    }).then( (data) => {
        let splitData = data.split("\n");
        splitData = splitData.sort();

        const fullList = unsortable.concat(splitData);
        fullList.forEach( (element) => {
            const listEntry = document.createElement("li");
            listEntry.innerText = element;
            watchlist.append(listEntry);
        });
    });
}

