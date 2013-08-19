var keysDown = {}; // Current keys pressed
var GRAVITY = 400.00;

define(['models/player'], function(player){
	var canvas, ctx, dt, running, now, then, interval;
	var player;
	var then = Date.now();
	
	// Background image
	var background = new Image();
	background.src = "./images/background.png";
	
	//Crosshair 
	var mouseX = 0;
	var mouseY = 0;
	var crossWidth = 16;
	var crossHeight = 16;
	var crosshair = new Image();
	crosshair.src = './images/crosshair.png'
	

	function init(){
		// Setup canvas
		canvas = document.createElement("canvas");
		canvas.id = "canvas1";
		ctx = canvas.getContext('2d');
		canvas.width = 512;
		canvas.height = 480;
		document.body.appendChild(canvas);
		
		// Setup Key Listeners
		addEventListener("keydown", function (e) {
			keysDown[e.keyCode] = true;
		}, false);
		
		addEventListener("keyup", function (e) {
			delete keysDown[e.keyCode];
		}, false);
		
		canvas.onmousemove = function(e){
			mouseX = e.clientX;
            mouseY = e.clientY;
		}
	};
	
	function handleEvents(){
		
	};
	
	function update(dt){
		player.update(dt);
	};
	
	function draw(ctx){
		ctx.drawImage(background, 0, 0); // Draw Background
		ctx.drawImage(crosshair, mouseX - crossWidth, mouseY - crossHeight ); //Draw Crosshair
		player.draw(ctx);
	};
	
	function run(){
		now = Date.now();
		dt = (now - then) / 1010;
		
		handleEvents();
		update(dt);
		draw(ctx);
		
		then = now;
	};
	
	function start(){
		interval = setInterval(run, 1);
	};
	
	return {
		init : init,
		start : start,
		keysDown: keysDown
	};
})
