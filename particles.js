class Particles{
    constructor(x,y){
var options={
    isStatic:false,
    friction:0
}
this.body=Bodies.circle(x,y,5,options);
this.radius=5;
this.color=color(random(0,225),random(0,225),random(0,225));
World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        noStroke();
        fill(this.color);
       ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius);
     
       pop();
    }
}