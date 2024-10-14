Author: Waqas Tariq
Email: waqastariqdar@gmail.com
Oct, 2024
———————————————————————————————————

# Mobile Application Development - Fall 2024 @ PUGC

## Lecture 01 - Intro
- React is a JavaScript library for building user interfaces.
- It uses JavaScript to load content in the background w/o loading the page.
- Why not vanilla JavaScript only? It’s cumbersome, complex, error-prone, etc.
	- JavaScript: How to update content of an element? Example?
    - **getElementById**
        ```
        const listContentDiv = document.getElementById(“list-content-div”)
        let listContent = “”;
        // add items in listContent using a loop
        for (i=0; i<5; i++) {
        listContent += “<li>Item ”+i+”</li>”;
        }
        const list = document.createElement("ul");
        tabContent.innerHTML = ""; // clear existing content
        list.innerHTML = listContent; // insert new content
        listContentDiv.append(list);
        ```

    - Selecting first element of the document of given CSS selector **document.querySelector()** 

### New React App
- After installing NodeJs:
- npm create vite@latest
- Select React and JavaScript in next steps
- npm install
- npm run dev