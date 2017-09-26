function setupOneColor(canvasId){
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");

  var renderWidth, renderHeight;
  /*function computeCanvasSize() {
      renderWidth = Math.min(canvas.parentNode.clientWidth - 20, 820);
      renderHeight = Math.floor(renderWidth*9.0/16.0);
      canvas.width = renderWidth;
      canvas.height = renderHeight;
  }

  window.addEventListener('resize', computeCanvasSize);
  computeCanvasSize();*/
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
    document.getElementById("easy").disabled=true;
      document.getElementById("medium").disabled=true;
        document.getElementById("hard").disabled=true;
    ctx.fillStyle = "white";
   ctx.fillRect(0,0,canvas.width, canvas.height);
      var rows = 4;
      var cols = 4;
      width = 70;
      console.log("easy checked");
      playGameOne(faces_easy,canvasId, rows, cols,width);
  }

  function medium(){
    document.getElementById("easy").disabled=true;
      document.getElementById("medium").disabled=true;
        document.getElementById("hard").disabled=true;
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
      //ctx.clearRect(0,0,canvas.width, canvas.height);
      var rows = 6;
      var cols = 6;
      width = 60;
      var faces_medium = faces_easy.concat(faces_med);
      playGameOne(faces_medium,canvasId, rows, cols,width);

    }

  function hard(){
    document.getElementById("easy").disabled=true;
      document.getElementById("medium").disabled=true;
        document.getElementById("hard").disabled=true;
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
      //ctx.clearRect(0,0,canvas.width, canvas.height);
      var rows = 8;
      var cols = 8;
      width = 50;
      var faces_medium = faces_easy.concat(faces_med);
      var faces_hard = faces_medium.concat(faces_h);
      playGameOne(faces_hard,canvasId, rows, cols,width);
    }
}


function setupTwoColor(canvasId){
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");

  var renderWidth, renderHeight;
/*  function computeCanvasSize() {
      renderWidth = Math.min(canvas.parentNode.clientWidth - 20, 820);
      renderHeight = Math.floor(renderWidth*9.0/16.0);
      canvas.width = renderWidth;
      canvas.height = renderHeight;
  }

  window.addEventListener('resize', computeCanvasSize);
  computeCanvasSize();*/
  document.getElementById("easy").addEventListener("click", easy);
  document.getElementById("medium").addEventListener("click", medium);
  document.getElementById("hard").addEventListener("click", hard);

  var faces_easy1 = [
    "Chartreuse",
    "Chocolate",
    "Coral",
    "Cornflowerblue"
  ]

  var faces_easy2 = [
    "Aqua",
    "Gold",
    "DarkOrchid",
    "seagreen"
  ]

  var faces_med1 = [
    "purple",
    "LightSalmon",
    "orange",
    "PaleVioletRed",
    "green"
  ]

  var faces_med2 = [
    "black",
    "navajowhite",
    "navy",
    "tomato",
    "deeppink"
  ]

  var faces_h1 = [
    "aquamarine",
    "brown",
    "cadetblue",
    "crimson",
    "darkgoldenrod",
    "darkslateblue",
    "fuchsia",
    "greenyellow"
  ]

  var faces_h2 = [
    "darkcyan",
    "lightgreen",
    "lightgrey",
    "lime",
    "midnightblue",
    "orangered",
    "rosybrown",
    "yellow"
  ]


  function easy(){
    document.getElementById("easy").disabled=true;
      document.getElementById("medium").disabled=true;
        document.getElementById("hard").disabled=true;
    ctx.fillStyle = "white";
   ctx.fillRect(0,0,canvas.width, canvas.height);
      var rows = 4;
      var cols = 4;
      width = 70;
      console.log("easy checked");
      playGameTwo(faces_easy1,faces_easy2,canvasId, rows, cols,width);
  }

  function medium(){
    document.getElementById("easy").disabled=true;
      document.getElementById("medium").disabled=true;
        document.getElementById("hard").disabled=true;
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
      //ctx.clearRect(0,0,canvas.width, canvas.height);
      var rows = 6;
      var cols = 6;
      width = 60;
      var faces_medium1 = faces_easy1.concat(faces_med1);
      var faces_medium2 = faces_easy2.concat(faces_med2);
      playGameTwo(faces_medium1, faces_medium2,canvasId, rows, cols,width);

    }

  function hard(){
    document.getElementById("easy").disabled=true;
      document.getElementById("medium").disabled=true;
        document.getElementById("hard").disabled=true;
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
      //ctx.clearRect(0,0,canvas.width, canvas.height);
      var rows = 8;
      var cols = 8;
      width = 50;
      var faces_medium1 = faces_easy1.concat(faces_med1);
      var faces_medium2 = faces_easy2.concat(faces_med2);

      var faces_hard1= faces_medium1.concat(faces_h1);
      var faces_hard2 = faces_medium2.concat(faces_h2);
      playGameTwo(faces_hard1, faces_hard2,canvasId, rows, cols,width);
    }
}
