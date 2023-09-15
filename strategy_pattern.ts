interface FlyBehavior {
  fly(): void;
}

interface QuackBehavior {
  quack(): void;
}

abstract class Duck {
  flyBehaviour: FlyBehavior;
  quackBehavior: QuackBehavior;

  abstract display(): void;

  setFlyBehaviour(fb: FlyBehavior) {
    this.flyBehaviour = fb;
  }

  setQuackBehaviour(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  performFly() {
    this.flyBehaviour.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  swim() {
    console.log("All ducks floats");
  }
}

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I am flying");
  }
}

class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can't flying");
  }
}

class Quack implements QuackBehavior {
  quack(): void {
    console.log("I am quacking");
  }
}

class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("I can't quacking");
  }
}

class Squeak implements QuackBehavior {
  quack(): void {
    console.log("I can't quacking but squeaking");
  }
}

class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log("I am flying with a rocket");
  }
}

class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehaviour = new FlyWithWings();
  }

  display(): void {
    console.log("I am mallard duck");
  }
}

class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  display(): void {
    console.log("I am a model duck");
  }
}

class MiniDuckSimulator {
  mallard: Duck = new MallardDuck();

  mallardDuck() {
    this.mallard.performQuack();
    this.mallard.performFly();
  }

  modelDuck() {
    const model: Duck = new ModelDuck();

    model.performFly();
    model.setFlyBehaviour(new FlyRocketPowered());
    model.performFly();
  }
}

const miniDuck = new MiniDuckSimulator();

miniDuck.mallardDuck();
miniDuck.modelDuck();
