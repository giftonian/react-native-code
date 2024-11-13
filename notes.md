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

## Lecture 00 - Introduction to React
- 
### New React App
- After installing NodeJs:
- npm create vite@latest
- Select React and JavaScript in next steps
- npm install
- npm run dev

# References
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
5. https://www.paulsblog.dev/advanced-javascript-concepts-to-write-high-quality-code-that-scales/
6. https://www.youtube.com/watch?v=c-0P67cxTbI
7. https://www.youtube.com/watch?v=M2u6AS0Mx8A&t