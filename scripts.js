var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var Colors = [
              "#FFA38A",
              "#FF8F71",
              "#2BB289",
              "#71FFD4",
              ];

/*
///Rectengular
c.fillRect(100, 100, 100, 100);
c.fillRect(400, 200, 100, 100);
c.fillRect(200, 400, 100, 100);
///Stro.beginPath()k;
c.moveTo(200, 200);
c.lineTo(400, 200);
c.lineTo(200, 400);
c.lineTo(200, 200);
c.strokeStyle = "red";
c.stroke();
///Arc/Circle


for (var i = 0; i < 10; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var index =  Math.round(Math.random() * Colours.length);
    
    c.beginPath();
    c.lineWidth=10;
    
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    
    c.strokeStyle = Colours[index];
    
    c.stroke();
    console.log(index);
}
*/


function Circle(x, y, dx, dy, r, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.color = color;


    this.draw = function () {

        c.beginPath();
        c.lineWidth = 2;

        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        
        c.strokeStyle = color;
        c.stroke();
//        console.log(color);
    }

    this.update = function () {
        //Bouncing throu the x 
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        //Bouncing throu the y
        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy;
        }
        //Upadating x and y
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

}


var circleArray = [];
//Circele spawn
for (var i = 0; i < 25; i++) {
    var r = 80;
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var index =  Math.round(Math.random() * Colors.length);
    circleArray.push(new Circle(x, y, dx, dy, r, Colors[index]) );
}

//Circle animate
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

        for (var i = 0; i < 100; i++) {
            circleArray[i].update();
        }   
}

animate();
