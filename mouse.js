function mouse(){
	this.name='mouse';
	this.alive=true;
}
mouse.prototype.die=function(){
	this.alive=false;
}