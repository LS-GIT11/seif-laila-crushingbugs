// variables
let theThumbnails = document.querySelectorAll('#buttonHolder img'),
    gameBoard = document.querySelector('.puzzle-board'),
    pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    resetPieces = document.querySelectorAll('.reset-pieces');

// functions

            //bug 2 here!!!
function changeImageSet() {
    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
}

function allowDrag(e) {
    // adds the ID of the element (the one being dragged) to the data transfer object
    // as 'draggedEl', so we can get it later
    console.log('started to drag piece!')
    e.dataTransfer.setData('draggedEl', this.id);
}



function allowDragOver(e) {
e.preventDefault();
console.log('dragging over drop zone!');
}

            //bug 1 here!!!
function allowDrop(e) {
    e.preventDefault();



    // gets the dragged element's (El) ID from the data transfer object (using 'draggedEl')
    let droppedElId = e.dataTransfer.getData('draggedEl');
    
    // get the ACTUAL dragged element, using the ID
    let droppedEl = document.querySelector(`#${droppedElId}`);
    
    // append the dragged element to the drop zone
    this.appendChild(droppedEl);
}



// event listeners

theThumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImageSet));
pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));
dropZones.forEach(zone => {
    zone.addEventListener ('dragover', allowDragOver);
    zone.addEventListener ('drop', allowDrop);
});