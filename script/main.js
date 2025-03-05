// variables
let theThumbnails = document.querySelectorAll('#buttonHolder img'),
    gameBoard = document.querySelector('.puzzle-board'),
    pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    resetPieces = document.querySelectorAll('.reset-pieces');

// functions
                //bug 2 & 3 here!!!
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
    const dropZone = e.currentTarget;


    //so how I did it was if the dropZone finds/selects 'img'... kinda saw how in pzlPieces its 'puzzle-piece img' and not just 'puzzle-pieces'... to first log that the dropZone already taken. In the link I was reading the "if...else" section had a thing called "return" in the example, which took a look at that section and seemed perfect. 
    //so 'if' is saying "if this happens", then I would just add whatever commands I needed. I looked at the example in the mdn links to see how I should write it. for querySelector we always had () after to select what we are looking for.
    //looking at it i'm happy that it's actually kinda easy to read, I think I just needed a moment away from it from last time i worked on it.

    if (dropZone.querySelector('img')) {
        console.log("Uh.. This drop zone is already taken!");
        return; //looking at the first ex in "if...else" section, i was like "it says return result; with result having two options. if i just wrote nothing will it... do nothing?"
    };
    //I tried writing '.puzzle-pieces img' in the () and not just 'img', but it didn't work the first time... i then just did img because i was like "well it's just looking for the img that's placed because that is literally what the puzzle piece is? right?" then it worked :)...
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

    // gets the dragged element's (El) ID from the data transfer object (using 'draggedEl')
    let droppedElId = e.dataTransfer.getData('draggedEl');
    
    // get the ACTUAL dragged element, using the ID
    let droppedEl = document.querySelector(`#${droppedElId}`);
    
    // append the dragged element to the drop zone
    this.appendChild(droppedEl);
    
} //bug did not go off until the end, that tells me i may need to add a sort of restriction for when dropping a piece into a filled drop zone

// event listeners
theThumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImageSet));


pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));


dropZones.forEach(zone => {
    zone.addEventListener ('dragover', allowDragOver);
    zone.addEventListener ('drop', allowDrop);
});


