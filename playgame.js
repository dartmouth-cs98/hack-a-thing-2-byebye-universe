// Make an array which has 2 of each, then randomize it
function playGame(faces,rows,cols,width){
  console.log("in playgame");
  var canvas = document.getElementById("memgame");
  var ctx = canvas.getContext("2d");
  var Tile = function(x, y, face) {
      this.x = x;
      this.y = y;
      this.face = face;
      this.width = width;
      this.matched = false;
  };

  Tile.prototype.drawFaceDown = function(){
    ctx.beginPath();
    ctx.fillStyle="darkslategray";
    ctx.lineWidth = "3";
    ctx.fillRect(this.x,this.y,this.width,this.width);
    ctx.strokeStyle = "black";
    ctx.stroke();
    //var img = new Image();
    //img.src = "memGameBackground.jpg";
    //ctx.drawImage(img, this.x, this.y, this.width, this.width);
    this.isFaceUp = false;
  }

  Tile.prototype.drawFaceUp= function(){
    ctx.beginPath();
    ctx.fillStyle=this.face;
    ctx.fillRect(this.x,this.y,this.width,this.width);
    this.isFaceUp = true;
  }

var selected = [];
for (var i = 0; i < (rows*cols)/2; i++) {
    // Randomly pick one from the array of remaining faces
    var randomInd = Math.floor(Math.random() * (faces.length -1));
    var face = faces[randomInd];
    // Push 2 copies onto array
  //  console.log(face);
    selected.push(face);
    selected.push(face);
    // Remove from array
    faces.splice(randomInd, 1);
}

//shuffle the array
//taken from Stackoverflow, implements Fisher Yates shuffle
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;
// While there remain elements to shuffle...
while (0 !== currentIndex) {
  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  // And swap it with the current element.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}
return array;
}

shuffle(selected);

// Create the tiles
var tiles = [];
for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
        var face = selected.pop()
        tiles.push(new Tile(i * (width+8) + 5, j * (width+8) + 5, face));
    }
}

// Start by drawing them all face down
function faceDown() {
for (var i = 0; i < tiles.length; i++) {
//  console.log(tiles[i].face);
  if (!tiles[i].matched){
      tiles[i].drawFaceDown();
  }
}
}
faceDown();

Tile.prototype.isUnderMouse = function(x, y) {
    return x >= this.x && x <= this.x + this.width  &&
        y >= this.y && y <= this.y + this.width;
}


var tilesFlipped = [];
var numFlips = 0;
function flipTile(event){
  for (var i = 0; i < tiles.length; i++){
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    if(tiles[i].isUnderMouse(x, y)){
      if (!tiles[i].isFaceup && tilesFlipped.length < 2){
        tiles[i].drawFaceUp();
        tilesFlipped.push(tiles[i]);
      }
      if (tilesFlipped.length ==2){
        numFlips++;
        console.log(tilesFlipped[1].face +"," + tilesFlipped[0].face);
        if (tilesFlipped[1].face == tilesFlipped[0].face){
          tilesFlipped[1].matched = true;
          tilesFlipped[0].matched = true;
        }
        setTimeout(faceDown,300);
        tilesFlipped = [];
      }
    }
  }

  var foundAllMatches= true;
  for (var i = 0; i < tiles.length; i++){
    foundAllMatches = foundAllMatches && tiles[i].matched;
  }

  if (foundAllMatches){
    alert("Congratulations! You succeeded in "+ numFlips + " tries!!!");
  }
}

document.addEventListener("click", flipTile);
}
