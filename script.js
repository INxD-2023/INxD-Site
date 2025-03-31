// Workflow : 
// Get data > Write card function > Generate HTML > Put on the web page

import {html} from "https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm" 

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTs8FZgvl_WOSxgIOWEHAqlflIeW8P9-xB6Bi0QSfpzIIgQDKCiZMWiJmBA1zArqCryOi0YmEo7l8bY/pub?gid=0&single=true&output=csv"

function card(data) {
    return html.fragment`
        <div class="portfolio">
            <img src="${data.portfolioImage}" alt="">
            <div class="details">
                <p>Batch of ${data.batchOf}</p>
                <h3>${data.name}</h3>
                <p class="description">${data.description}</p>
                <a href="${data.portfolioLink}">Portfolio link</a>
            </div>
        </div>
    `;
}

const data = await d3.csv(url)
console.log(data)
// the map an loop function
var htmlCards = html.fragment`${data.map((x) => card(x))}`

// Write the render function
var tag = document.getElementById("portfolios");
tag.appendChild(htmlCards)