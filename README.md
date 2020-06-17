# Website Update Guide

This guide serves as a tutorial on how to update the information listed on the website, such as news articles, ban list,
watch list, among other things. Minimal programming/web design knowledge is necessary, and all of it is automatically generated
by parsing text files for a certain formatting. This guide will be updated as more of the site is automated.

## Updating News Articles

Updating news articles is a _slightly_ complicated, but relatively straightforward process. Articles are written using
essentially a modified version of Markdown to generate the articles. To create a new article, simply open the file 
tiled "news.txt" and add an entry at the end following this format:

```
//START
<DATE>
<TITLE>

Content that is meant to be shown in paragraphs is typed just like normal. You can do things like 
<b>this</b> for bold text. Or something like <a href="somehwere">this</a> for links.

#Headers require a '#' symbol in front of the text

*bulleted lists
*start with
*asterisks

//END
```

Then at the bottom of the page you can select "create new branch for this commit and start a pull request." It must be
approved and merged by an administrator.

**NOTE:** The date _must_ be the first line, and the title _must_ be the second line following the //START tag because of
how the JavaScript parses the text. Paragraph content _can_ contain embedded HTML so things like line breaks, links, as
well as bold/italic text can be inserted right into the content, like what is shown above. https://www.w3schools.com/html
has great information on this front.

Here is an example of the "Discord update" news article, for reference:

```
//START
Feb. 6, 2020
Discord channel is now open!

We now have a discord channel for discussion and collaboration for the format!
You can join it <a href="https://discord.gg/PvSr2M8">here.</a>
//END
```

## Updating Ban/Watch lists

Updating the ban and watch lists is a significantly easier process than updating news articles. Simply open either
"banlist.txt" or "watchlist.txt" and add the card name to the end of the file, or remove the card name from the list.
There is no need to worry about alphabetical sorting, the dynamic population of the site takes care of this for us.

Then at the bottom of the page you can select "create new branch for this commit and start a pull request." It must be
approved and merged by an administrator.
