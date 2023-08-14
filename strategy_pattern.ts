interface IFly {
  fly(): void;
}

interface IQuack {
  quack(): void;
}

class FlyWithWings implements IFly {
  fly(): void {
    console.log("Fly with wings fly()");
  }
}

class FlyNoWay implements IFly {
  fly(): void {
    console.log("Fly no way fly()");
  }
}

class Quack implements IQuack {
  quack(): void {
    console.log("Quacking quack()");
  }
}

class MuteQuack implements IQuack {
  quack(): void {
    console.log("Mute Quack quack()");
  }
}

class Squeak implements IQuack {
  quack(): void {
    console.log("Squeak quack()");
  }
}

class Duck {
  private flyingBehaviour: IFly | undefined;
  private quackBehaviour: IQuack | undefined;

  swim(): void {
    console.log("main class swim display()");
  }

  display(): void {
    console.log("main class duck display()");
  }

  setPerformFly(fb: IFly) {
    this.flyingBehaviour = fb;
  }

  performFly() {
    this.flyingBehaviour ? this.flyingBehaviour.fly() : console.log("No flying behavior set");
  }

  setPerformQuack(qb: IQuack) {
    this.quackBehaviour = qb;
  }

  performQuack() {
    this.quackBehaviour ? this.quackBehaviour.quack() : console.log("No quacking behavior set");
  }
}

class MallardDuck extends Duck {}

class RedHeadDuck extends Duck {}

class RubberDuck extends Duck {}

class WoddenDuck extends Duck {}

const mallardDuck: Duck = new MallardDuck();
mallardDuck.setPerformFly(new FlyWithWings()); // Set flying behavior
mallardDuck.setPerformQuack(new Quack()); // Set quacking behavior

mallardDuck.performFly(); // Output: Fly with wings fly()
mallardDuck.performQuack(); // Output: Quacking quack()
