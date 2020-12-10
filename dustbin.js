class Dustbin extends BaseClass{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        super(x,y,200,20);
        this.image=loadImage("sprites/dustbingreen.png")
        
    }
    display(){
        super.display();
      }
};