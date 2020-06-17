import { substringsBetween } from "./string-utils.js";

let newsPane;

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

function addToDOM(article) {
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

window.onload = () => {
    newsPane = document.getElementById("newsPane");
    fetch("../news.txt").then( response => response.text() )
        .then( (data) => {
            data = data.replace(/\r\n/g, "\n"); // replaces Windows line endings with UNIX line endings
            let articles = substringsBetween("//START", "//END", data);
            articles = articles.reverse();
            articles.forEach( (article) => {
                addToDOM(article);
            });
        });
}