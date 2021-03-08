class Slingshot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 12
        }
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }
    display() {
        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            push()
            stroke(49, 23, 8)
            strokeWeight(10)
            if(pointA.x<250) {
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y)
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3)
               
            }
            else {
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y)
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3)
               
            }
            pop()
        }
        
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body;
    }
  };