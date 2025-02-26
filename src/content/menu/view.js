import "./style.css";

import { addChild } from "/src/content/base.js";

class View {
    static #TITLE = "The Menu";
    static #PIZZA_CATEGORY_NAME = "Pizzas";
    static #SALAD_CATEGORY_NAME = "Salads";
    static #STARTER_CATEGORY_NAME = "Starters";
    static #dsMain = document.createElement("div");
    static #dlButtons;
    static #dsList;

    static get TITLE () {
        return View.#TITLE;
    }

    static get PIZZA_CATEGORY_NAME() {
        return View.#PIZZA_CATEGORY_NAME;
    }

    static get SALAD_CATEGORY_NAME() {
        return View.#SALAD_CATEGORY_NAME;
    }

    static get STARTER_CATEGORY_NAME() {
        return View.#STARTER_CATEGORY_NAME;
    }

    static get dsMain() {
        return View.#dsMain;
    }

    static get dlButtons() {
        return View.#dlButtons;
    }

    static set dlButtons(obj) {
        View.#dlButtons = obj;
    }

    static set dsList(obj) {
        View.#dsList = obj; 
    }
  
    static get dsList() {
        return View.#dsList;
    }

    static renderTemplate(selectedChoice = "pizzas", foodArr) {
        console.log("Creating Menu Page");

        View.dsMain.setAttribute("id", "menu");
        addChild("h3", View.dsMain, this.#TITLE);

        const dsMenuSelector = addChild("div", View.dsMain, null, ["menu-selectors"]);
        const dsButtonContainer = addChild("div", dsMenuSelector, null, ["buttons-container"]);
        View.dlButtons = {
            pizzaSelector: addChild("button", dsButtonContainer, this.PIZZA_CATEGORY_NAME, [this.PIZZA_CATEGORY_NAME.toLowerCase(), selectedChoice === this.PIZZA_CATEGORY_NAME.toLowerCase() ? "selected" : null]),
            saladSelector: addChild("button", dsButtonContainer, this.SALAD_CATEGORY_NAME, [this.SALAD_CATEGORY_NAME.toLowerCase(), selectedChoice === this.SALAD_CATEGORY_NAME.toLowerCase() ? "selected" : null]),
            starterSelector: addChild("button", dsButtonContainer, this.STARTER_CATEGORY_NAME, [this.STARTER_CATEGORY_NAME.toLowerCase(), selectedChoice === this.STARTER_CATEGORY_NAME.toLowerCase() ? "selected" : null]),
        };

        const dsDisplayMenu = addChild("div", dsMenuSelector, null, ["display-menu"]);
        const dsCategory = addChild("div", dsDisplayMenu, null, ["category"]);
        View.dsList = addChild("ul", dsCategory);

        View.renderDisplayMenu(View.dsList, foodArr);
    }

    static resetSelections(buttons) {
        for (let selector in buttons) {
            if (buttons[selector].className.includes("selected")) {
                buttons[selector].classList.remove("selected");
            }
        }
    }

    static selectCategory(button) {
        button.classList.add("selected");
    }

    // Reset all selections first
    // Then only add the class selected to the selected button
    static select(allButtons, button) {
        View.resetSelections(allButtons);
        View.selectCategory(button);
    }

    static removeChild(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    static renderDisplayMenu(parentList, foodArr) {
        // we remove entire list first
        View.removeChild(parentList);

        // Then we append each food item on the menu
        foodArr.forEach(food => {
            const dsListItem = addChild("li", parentList, null, ["food"]);
            const dsFoodNamePara = addChild("p", dsListItem, food.name, ["name"]);

            addChild("p", dsListItem, food.priceString, ["price"]);
            addChild("p", dsListItem, food.description, ["description"]);

            if (food.label) {
                addChild("span", dsFoodNamePara, food.label, ["label", food.color]);
            }
        });
    }

    static addListener(button, renderListener) {
        if (button) {
            button.addEventListener("click", renderListener);
        }
        
    }

    static removeListener(button, renderListener) {
        if (button) {
            button.removeEventListener("click", renderListener);
        }
        
    }
}




export { View }; 