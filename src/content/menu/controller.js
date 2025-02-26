import * as model from "./model.js";
import {View} from "./view.js";

class Controller {
    static #View = View;

    static get View() {
        return Controller.#View; 
    }
    
    static renderDefaultTemplate() {
        Controller.View.renderTemplate("pizzas", model.pizzas);
    
        if (Controller.View.dlButtons) {
            Controller.View.addListener(Controller.View.dlButtons.pizzaSelector, Controller.renderPizzaMenu);
            Controller.View.addListener(Controller.View.dlButtons.saladSelector, Controller.renderSaladMenu);
            Controller.View.addListener(Controller.View.dlButtons.starterSelector, Controller.renderStarterMenu);
        }
    }
    
    static renderPizzaMenu(event) {
        Controller.View.select(Controller.View.dlButtons, event.currentTarget);
        Controller.View.renderDisplayMenu(Controller.View.dsList, model.pizzas);
    }
    
    static renderSaladMenu(event) {
        Controller.View.select(Controller.View.dlButtons, event.currentTarget);
        Controller.View.renderDisplayMenu(Controller.View.dsList, model.salads);
    }
    
    static renderStarterMenu(event) {
        Controller.View.select(Controller.View.dlButtons, event.currentTarget);
        Controller.View.renderDisplayMenu(Controller.View.dsList, model.starters);
    }
    
    static removeAllListeners() {
        if (Controller.View.dlButtons) {
            Controller.View.removeListener(Controller.View.dlButtons.pizzaSelector, Controller.renderPizzaMenu);
            Controller.View.removeListener(Controller.View.dlButtons.saladSelector, Controller.renderSaladMenu);
            Controller.View.removeListener(Controller.View.dlButtons.starterSelector, Controller.renderStarterMenu);
        }
        
    }
}

Controller.renderDefaultTemplate();

export { Controller }; 