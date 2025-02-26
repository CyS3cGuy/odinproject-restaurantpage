// Element is the element to be created
// text is the textcontent in the created element
// ClassArr accepts class lists as an array
// Keyval accepts attribute-value pair
function addChild(childHTMLTag, parent, text, classArr = null, keyval = null) {
    const child = document.createElement(childHTMLTag);
    if (text) child.textContent = text;

    if (classArr) {
        classArr.forEach(eachClass => {
            if (eachClass) child.classList.add(eachClass);
        }); 
    }

    if (keyval) {
        for (attribute in keyval) {
            child.setAttribute(keyval[attribute], keyval.value);
        }
    }

    parent.appendChild(child);
    
    return child; 
}

export {addChild}; 