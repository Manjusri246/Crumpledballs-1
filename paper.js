class Paper{
constructor(x,y,radius){
    var paperoptions={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
  this.paper=Bodies.circle(x,y,radius)
 this.radius=radius
 World.add(world,this.paper)
}
 display(){
 ellipseMode(RADIUS)
ellipse(this.paper.position.x,this.paper.position.y,this.radius,this.radius)
 }

}