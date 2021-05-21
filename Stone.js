class Stone{
	constructor(x,y){
      var options={
		  'restitution':0.8,
		  'friction':0.9,
		  'density':12
	  }
	  this.body=Bodies.rectangle(x, y, 130, 50, options);
	  this.width = 130;
	  this.height = 50;
	  
World.add(world, this.body);
  }
  display(){
		 var pos= this.body.position;
		 var angle= this.body.angle;
		  push();
		  translate(pos.x, pos.y);
		  rectMode(CENTER);
		  strokeWeight(4);
		  stroke("black");
		  fill("red");
		  //draw the ellipse here to display the rubber ball
        rect(0,0,this.width, this.height);
		  pop();
  }

};