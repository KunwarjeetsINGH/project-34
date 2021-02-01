class Ground{
    constructor(x,y,h,w){
        var option = {
            isStatic: true
        }

        this.x = x
        this.y = y
        this.h = h
        this.w = w
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h,option)
        World.add(world, this.body)
    }
   display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("white")
        rect(pos.x , pos.y, this.w, this.h)
   }
};