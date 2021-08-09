class Cannon{

    constructor(x,y,w,h,angle){
          this.x=x;
          this.y=y;
          this.w=w;
          this.h=h;
          
    }
      display(){
         fill("#676e6a")
          push();
          translate(this.x,this.y);
          rotate(this.angle);
          rect(-10,-20,this.w,this.h);
          pop();
          arc(this.x-30,this.y+100,160,230,PI,TWO_PI)
  
          
      }
  }