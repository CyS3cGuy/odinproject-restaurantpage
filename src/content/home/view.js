import { addChild } from "/src/content/base.js";
import "./style.css";

const OPENING_START = "10AM";
const OPENING_END = "10PM";
const BRAND_TITLE = "PIZZA HOUSE";
const TAGLINE = "Your number ONE choice PIZZA";
const BUTTON_TEXT = "Let Me See The Menu";
const OPENING_HOURS = `Open from ${OPENING_START} to ${OPENING_END}`;
const dMain = document.createElement("div");

function renderTemplate() {

    console.log("Creating Home Page");

    dMain.setAttribute("id", "home");
    addChild("h1", dMain, BRAND_TITLE, null, null);
    addChild("h3", dMain, TAGLINE, null, null);
    let menuNavBtn = addChild("button", dMain, BUTTON_TEXT, ["navigate-menu"], null);
    addChild("p", dMain, OPENING_HOURS, ["open-hours"], null); 

    return menuNavBtn;
}

const dsMenuNav = renderTemplate(); 

export { dMain, dsMenuNav };  