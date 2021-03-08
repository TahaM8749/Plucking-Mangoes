class Mango{
    constructor(x, y, r){
        //super(x,y, r);
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        };
        this.x = x;
        this.y = y;
        this.r = 25;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
       // this.image = loadImage("Images/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("orange");
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
       // image(this.image, 100, 680, 20, 20);
        pop();
    }
}