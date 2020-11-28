function cat(){
	this.name='meo';
	this.stomatch=[];
}
cat.prototype.eat=function(mouse){
	this.stomatch.push(mouse);
}
module.exports=cat