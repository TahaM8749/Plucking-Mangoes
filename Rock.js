class Rock{
    constructor(x,y,r){
        var options={
            isStatic:0,
            restitution:0,
            friction:1.2,
            denstity:1.2
        }
        this.x = x;
        this.y = y;
        this.r = 20;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("gray");
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        pop();
    }
}