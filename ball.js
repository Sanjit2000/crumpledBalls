class Ball {
constructor (){
var options = {

restitution : 0.8,
density : 1,
friction : 0.5



}
this.body = Bodies.circle(100,200,50,options)
World.add(world,this.body)

}

display(){

ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,50,50)


}




}