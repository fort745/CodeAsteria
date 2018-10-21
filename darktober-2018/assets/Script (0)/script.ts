class CharacterBehavior extends Sup.Behavior{
  awake(){
  }
  speed = .02;
  update(){
    if(Sup.Input.isKeyDown("SPACE")){
      this.speed = .03;
    } else{
      this.speed = .02;
    }
    if(Sup.Input.isKeyDown("LEFT")){
      this.actor.spriteRenderer.setHorizontalFlip(false);
      this.actor.move(-this.speed,0,0);
    }
    else if(Sup.Input.isKeyDown("RIGHT")){
      this.actor.move(this.speed,0,0);
      this.actor.spriteRenderer.setHorizontalFlip(true);
    }
    if(Sup.Input.isKeyDown("UP")){
      this.actor.move(0,this.speed,0);
    }
    else if(Sup.Input.isKeyDown("DOWN")){
      this.actor.move(0,-this.speed,0);
    }
  }
}
class EbbBehavior extends Sup.Behavior{
  awake(){}
  update(){
    if((Sup.Input.isKeyDown("LEFT") || Sup.Input.isKeyDown("RIGHT") || Sup.Input.isKeyDown("UP") ||Sup.Input.isKeyDown("DOWN")) && Sup.Input.isKeyDown("SPACE")){
      this.actor.spriteRenderer.setAnimation("Ebb Row", false);
    }
    else if(Sup.Input.isKeyDown("LEFT") || Sup.Input.isKeyDown("RIGHT") || Sup.Input.isKeyDown("UP") ||Sup.Input.isKeyDown("DOWN")){
      this.actor.spriteRenderer.setAnimation("Ebb Paddle", false);
    }
    else{
      this.actor.spriteRenderer.setAnimation("Ebb Idle");
    }
  }
}
Sup.registerBehavior(CharacterBehavior);
Sup.registerBehavior(EbbBehavior);
Sup.loadScene("Main Scene");
