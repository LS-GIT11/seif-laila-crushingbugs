// variables
let theThumbnails = document.querySelectorAll('#buttonHolder img'),
    gameBoard = document.querySelector('.puzzle-board'),
    pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    resetPieces = document.querySelector('.puzzle-pieces');
    //I see there is already a resetPieces, assumung it is for bug 2?

// functions
                //bug 2 was here!!!
                //bug 3 here!!!
function changeImageSet() {
    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

    //what i was thinking here, something like "when this happens, also do this... then it would be like reset to default/return all pieces." I saw a section called "do...while" which to me at first I would guess it's "do this while this is happening" and not like "if this happens, do this".. but I don't think it would work so I just left it for now.

    // i tried just doing return (pzlPieces); thinking it would like reset it all, but it didn't work... i know i have to keep it within this function...

    pzlPieces.forEach(piece => resetPieces.appendChild(piece));
    
    //classmate helped me with this part, wanted to ask of that is okay and if i can cite my classmate instead? if not i can always try a new way.
    //i wanted to use resetPieces that we did in these files (was there at the start connected to '.reset-pieces'), but quickly realized that would not help me because i had no idea where to put it. so i got rid of it and focused on plzPieces
    //since i had to collect all pieces, use forEach, then call it pieces... resetPieces is the container i want the objects to go (connected to .puzzle-pieces, the default spot where the pieces first were before dragging anything) the to move those pieces you need to appendChild, the what you are appending is (piece)

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

                //bug was 1 here!!!
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


