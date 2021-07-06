let position = 0;

const nextView = function () { // block scoped
    // grab the element from the DOM
    const viewFinder = document.getElementById('viewFinder');
    // decrement the position by the width of the image
    position -= 550;
    // access the style transform on the element and apply position
    viewFinder.style.transform = `translateX(${position}px)`;
}

const prevView = function () { // block scoped
    // grab the element first
    const viewFinder = document.getElementById('viewFinder');
    // increment the position by the width of the image
    position += 550;
    // access the style transform on the element and apply position
    viewFinder.style.transform = `translateX(${position}px)`;
}