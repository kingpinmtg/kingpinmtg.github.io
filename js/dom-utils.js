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

function parseBody(dataLines, newsEntry) {

    while(dataLines.length !== 0) {
        if (dataLines[0].startsWith("#")) {
            const header = document.createElement("h3");
            header.innerText = dataLines.shift().substring(1);
            newsEntry.append(header);
        }
        else if (dataLines[0].startsWith("*")) {
            const list = document.createElement("ul");
            while (dataLines[0].startsWith("*")) {
                const listItem = document.createElement("li");
                listItem.innerText = dataLines.shift().substring(1);
                list.append(listItem);
            }
            newsEntry.append(list);
        }
        else {
            const chunk = [];
            const paragraph = document.createElement("p");
            while (dataLines.length != 0 && !dataLines[0].startsWith("*") && !dataLines[0].startsWith("#")) {
                chunk.push(dataLines.shift());
            }
            const innerHTML = chunk.join("");
            paragraph.innerHTML = innerHTML;
            newsEntry.append(paragraph);
        }
    }
}

export function addToDOM(article, newsPane) {
    let dataLines = article.split("\n");
    dataLines = dataLines.filter( val => val !== "" && val !== "\n" && val != "\r");

    const date = document.createElement("h1");
    date.innerText = dataLines.shift();
    const title = document.createElement("h2");
    title.innerText = dataLines.shift();
    
    const newsEntry = document.createElement("div");
    newsEntry.classList.add("news-entry");
    newsEntry.append(date);
    newsEntry.append(title);

    newsPane.append(newsEntry);

    parseBody(dataLines, newsEntry);
}