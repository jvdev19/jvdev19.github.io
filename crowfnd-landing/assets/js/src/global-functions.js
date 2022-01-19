// Set element on active state (used on burger menu and modal window)
function setActiveState(element,cssClass) {
    $(element).toggleClass(cssClass);
};

// Set new attribute (used to change visual elements like icons, when user interact with them)
function toggleAttr(element, attr, valueOne, valueTwo) {    
    let newValue = $(element).attr(attr);    
    if (newValue === valueOne) {    
        $(element).attr(attr, valueTwo);
    }
    if (newValue === valueTwo) {
        $(element).attr(attr, valueOne);
    }
};