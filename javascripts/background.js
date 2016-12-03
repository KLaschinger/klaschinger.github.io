var widthCount, heightCount;
var squares = [];
var SQUARE_SIZE = 80;
console.log("Loading");
initialize();

function initialize() {
  widthCount = view.size.width / SQUARE_SIZE;
  heightCount = view.size.height / SQUARE_SIZE;
  squares = [];

  for (i = 0; i < widthCount; i++) {
    for (j = 0; j < heightCount; j++) {
      var factor = Math.floor(Math.random() * 150);
      var rginit = 0;
      var binit = 255;

      if (factor > 75) {
        rginit += (factor - 100);
      } else {
        binit -= factor;
      }

      var obj = {
        path: new Path.Rectangle(new Rectangle(i * SQUARE_SIZE, j * SQUARE_SIZE, (i + 1) * SQUARE_SIZE, (j + 1) * SQUARE_SIZE)),
        height: j,
        direction: true, // True is up and false is down
        rg: rginit,
        b: binit
      };

      squares.push(obj);
    }
  }
  console.log("Initializing");
}

function onFrame(event) {
  for (i = 0; i < squares.length; ++i) {
    if (squares[i].direction == true) {
      if (squares[i].rg == 0) {
        if (squares[i].b < 255-75) {
          squares[i].direction = false;
        } else {
          if (Math.floor(Math.random() * (255 - squares[i].b) + squares[i].height) > 60) {
            squares[i].direction = false;
          }
        }
      }
    } else {
      if (squares[i].b == 255) {
        if (squares[i].rg > 75) {
          squares[i].direction = true;
        } else {
          if (Math.floor(Math.random() * squares[i].rg + squares[i].height) > 60) {
            squares[i].direction = true;
          }
        }
      }
    }

    if (squares[i].direction == true) {
      if (squares[i].rg == 0) {
        squares[i].b -= 1;
      } else {
        squares[i].rg -= 1;
      }
    } else {
      if (squares[i].b == 255) {
        squares[i].rg += 1;
      } else {
        squares[i].b += 1;
      }
    }

    squares[i].path.fillColor = new Color(squares[i].rg/255, squares[i].rg/255, squares[i].b/255);
    //console.log(squares[i].rg + " " + squares[i].rg + " " + squares[i].b + " " + squares[i].direction);
  }
}

function onResize(event) {
  initialize();
}
