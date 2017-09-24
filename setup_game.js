function setupTask(canvasId){
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");

  var renderWidth, renderHeight;
  function computeCanvasSize() {
      renderWidth = Math.min(canvas.parentNode.clientWidth - 20, 820);
      renderHeight = Math.floor(renderWidth*9.0/16.0);
      canvas.width = renderWidth;
      canvas.height = renderHeight;
  }

  window.addEventListener('resize', computeCanvasSize);
  computeCanvasSize();
  document.getElementById("easy").addEventListener("click", easy);
  document.getElementById("medium").addEventListener("click", medium);
  document.getElementById("hard").addEventListener("click", hard);

  var faces_easy = [
    "Chartreuse",
    "Chocolate",
    "Coral",
    "Cornflowerblue",
    "Aqua",
    "Gold",
    "DarkOrchid",
    "seagreen",
  ]

  var faces_med = [
    "purple",
    "LightSalmon",
    "orange",
    "PaleVioletRed",
    "green",
    "black",
    "navajowhite",
    "navy",
    "tomato",
    "deeppink"
  ]

  var faces_h = [
    "aquamarine",
    "brown",
    "cadetblue",
    "crimson",
    "darkgoldenrod",
    "darkslateblue",
    "fuchsia",
    "greenyellow",
    "lightgreen",
    "lightgrey",
    "lime",
    "midnightblue",
    "orangered",
    "rosybrown",
    "yellow"
  ]


  function easy(){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      var rows = 4;
      var cols = 4;
      width = 70;
      console.log("easy checked");
      playGame(faces_easy, rows, cols,width);
  }

  function medium(){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      var rows = 6;
      var cols = 6;
      width = 60;
      var faces_medium = faces_easy.concat(faces_med);
      playGame(faces_medium, rows, cols,width);
    }

  function hard(){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      var rows = 8;
      var cols = 8;
      width = 50;
      var faces_medium = faces_easy.concat(faces_med);
      var faces_hard = faces_medium.concat(faces_h);
      playGame(faces_hard, rows, cols,width);
    }



}
