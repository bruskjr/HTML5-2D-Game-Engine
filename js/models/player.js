define(['lib/sprite'], function(){
	//Starting Position
	var x = 10;
	var y = 420;
	
	var sprite = new Sprite('./images/player.png', [30,32], 6, 1)
	var xvel = 300; 
	var yvel = 0.0;
	var jump_height = 300.0;
	
	function move(dt){
		// Move Left
		if ( keysDown[37] || keysDown[65]) { // Left Arrow or A
			x -= xvel * dt;
		}
		
		
		// Move Right
		if ( keysDown[39] || keysDown[68]) { // Right Arrow or D
			x += xvel  * dt;
		}
		
		// Jump
		if ( keysDown[32] ) { // Space
			if ( yvel == 0 )
				yvel = jump_height;
		}
		
		// Player Physics ( Jumping and Falling )
		if ( yvel != 0) {
			y -= yvel*dt;
			yvel = yvel - (GRAVITY * dt);
			if ( y >= 420 ) { // Hit ground
				yvel = 0;
				y = 420; // Ground level
			}
		}	
	}
	
	function update(dt){
		move(dt);
		sprite.update(dt);
		
	}
	
	function draw(ctx){
		sprite.draw(ctx, [x, y]);
	}
	
	return {
		update: update,
		draw: draw
	}
});
