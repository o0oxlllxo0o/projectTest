var chalk=require('chalk')
function cat(){
	this.name='meo';
	this.stomatch=[];
}
cat.prototype.eat=function(mouse){
	this.stomatch.push(mouse);
}
console.log(chalk.blue("xin chao"))
module.exports=cat;