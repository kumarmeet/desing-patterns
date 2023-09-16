/**
    Publishers + Subscribers = Observer Pattern
    If you understand newspaper subscriptions, you pretty much understand the
    Observer Pattern, only we call the publisher the SUBJECT and the subscribers
    the OBSERVERS.

    The Observer Pattern defines a one-to-many dependency between objects so that when one object
    changes state, all of its dependents are notified and updated automatically.

    Design Principle
    Strive for loosely coupled designs between objects that interact
 */

interface Subject {
  registerObserver(obeserver: Observer): void;
  removeObserver(obeserver: Observer): void;
  notifyObserver(): void;
}

interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Array<Observer>;
  private temp: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = new Array<Observer>();
  }

  registerObserver(o: Observer): void {
    console.log(1414, o);
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    const index = this.observers.indexOf(o);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObserver() {
    for (const obs of this.observers) {
      obs.update(this.temp, this.humidity, this.pressure);
    }
  }

  getTemprature() {}
  getHumidity() {}
  getPressure() {}

  //this method gets called whenever the weather measurements have been updated
  private measurementsChanged() {
    this.notifyObserver();
  }

  setMesurements(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}

class CurrentConditionDisplay implements DisplayElement, Observer {
  private temp: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(`Current condition ${this.temp} temprature in F, ${this.humidity} humidity`);
  }
}

class StaticsDisplay implements DisplayElement, Observer {
  update() {}

  display() {}
}

class ForcastDisplay implements DisplayElement, Observer {
  update() {}

  display() {}
}

class ThirdParyDisplay implements DisplayElement, Observer {
  update() {}

  display() {}
}

const wd = new WeatherData();

const ccd = new CurrentConditionDisplay(wd);

wd.setMesurements(72, 65, 30.4);

ccd.display();
