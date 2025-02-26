import 'modern-normalize/modern-normalize.css';
import "/src/style.css"; 

import * as Home from "/src/content/home/view.js"; 
import * as Menu from "/src/content/menu/controller.js"; 

const dContent = document.querySelector("#content"); 
const dsHeaderNav = document.querySelector("header nav");
const dlNavButtons = Array.from(dsHeaderNav.querySelectorAll("button"));
const dsHomeButton = document.querySelector("#home-button");
const dsMenuButton = document.querySelector("#menu-button");

dsHomeButton.addEventListener("click", renderHomeView);
dsMenuButton.addEventListener("click", renderMenuView);
Home.dsMenuNav.addEventListener("click", renderMenuView);

function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild); 
    }
}

function resetNav() {
    const selectedButton = dlNavButtons.find(eachBtn => eachBtn.className.includes("selected"));
    
    if (selectedButton) {
        selectedButton.classList.remove("selected");
    }
    
}

function selectNav(event) {
    let button = null;
    if (event instanceof Event) {
        button = event.currentTarget || event.target; 
    } else {
        button = event;
    }

    if (button) {
        button.classList.add("selected"); 
    }
    
    
}

function renderHomeView(event) {
    // Reset everything, including listener
    removeChild(dContent); 
    resetNav();

    // Render into DOM
    selectNav(dsHomeButton);
    dContent.appendChild(Home.dMain); 
}

function renderMenuView(event) {
    // Reset everything, including listener
    removeChild(dContent);
    resetNav();

    // Render into DOM
    selectNav(dsMenuButton);
    dContent.appendChild(Menu.Controller.View.dsMain) ;  
}

renderHomeView(dsHomeButton);    
 

