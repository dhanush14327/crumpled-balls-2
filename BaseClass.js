class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
      }
}