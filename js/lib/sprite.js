function Sprite(url, size, speed, frames){
	this.size = size;
	this.frame = 0;
	this.frames = frames;
	this.speed = speed;
	this.img = new Image();
	this.img.src = url;
}

Sprite.prototype.load = function(){
	// Does nothing for now
}

Sprite.prototype.update = function(dt){
	this.frame += dt*this.speed; 
}

Sprite.prototype.draw = function(ctx, pos){
	var offset_x = (Math.floor(this.frame) % this.frames) * width; // Horizontal Sprites
	var width = this.size[0];
	var height = this.size[1];

	
	ctx.drawImage(this.img, pos[0], pos[1]);
}
