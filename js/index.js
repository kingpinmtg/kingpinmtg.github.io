import { substringsBetween, addToDOM } from "./dom-utils.js";

window.onload = () => {
    const newsPane = document.getElementById("newsPane");
    fetch("../news.txt").then( response => response.text() )
        .then( (data) => {
            data = data.replace(/\r\n/g, "\n"); // replaces Windows line endings with UNIX line endings
            let articles = substringsBetween("//START", "//END", data);
            addToDOM(articles[articles.length-1], newsPane);
        });
}