
let fadeInClass = document.querySelectorAll(".fadeIn"); // Class selector is identified as a variable

function isElementInViewport (el) { // isElementInViewport is defined
    var rect = el.getBoundingClientRect(); // assign variable to element dimensions
    return (
        rect.top <= (window.innerHeight) && // get the height of the  element
        rect.left <= (window.innerWidth) // get the width of the element
    );
}

function FadeInEvent () { // Setting up Fade In Event
    fadeInClass.forEach(currentElement => { // Loop through each fadeInClass
        if (isElementInViewport(currentElement)) { // Check if fadeInClass is in the viewport
            currentElement.classList.add("fadeInTransition"); // Add CS Transistion Class
            currentElement.classList.remove("fadeIn"); // Remove CS opacity 0 Class
        } else {
            (console.log("whoops"));
        }
    });
}

window.addEventListener("scroll", FadeInEvent);


//Need to make sure this effect doesn't apply to certain media queries
//Need to add throttling