class Pig{
    constructor(x,y,width,height){
    var options={
        restitution:0.5,
        density:1,
        friction:0.2,
    }
  this.body= Bodies.rectangle(x,y,width, height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  World.add(world,this.body);
    }
    display(){
       push();
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
        fill("green") ;
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
    }
}
