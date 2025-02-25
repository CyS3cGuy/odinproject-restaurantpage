import 'modern-normalize/modern-normalize.css';
import "/src/style.css"; 

import * as Home from "/src/content/home/view.js"; 

const dContent = document.querySelector("#content"); 

function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild); 
    }
}

function createHomeView(parent) {
    removeChild(parent); 
    parent.appendChild(Home.createTemplate()); 
}

createHomeView(dContent);   

