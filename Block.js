class Block {
    constructor(x,y,w,h){
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
            this.body= Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.body);
            this.w = w;
            this.h = h;
            this.visibility = 255;
    }
    score(){
        if(this.visibility<0&&this.visibility>-100){
            score++
        }
    }
    display(){
        
        if(this.body.speed<3){
            push();
            var angle = this.body.angle;
            var pos= this.body.position;
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.w, this.h);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            // tint(255, this.this.visibility);
            pop();
        }
    }

}

