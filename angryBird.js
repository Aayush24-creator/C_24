class Rio {
    constructor(n1,n2,n3,n4){
    var options={
    restitution=0.2,
    density = 0.8 ,
    friction=0.3  
}
    this.bird = Bodies.rectangle(n1,n2,n3,n4,options);
    this.x=n1;
    this.y=n2;
    this.width=n3;
    this.height=n4;
    World.add(world,this.bird); 
    }
    display(){
        push();
        translate(this.bird.position.x,this.bird.position.y);
        rotate(this.bird.angle);
       rectMode(CENTER);
       fill("red"); 
       rect(0,0,this.width,this.height);
       pop();
    }
}