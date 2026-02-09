import { Observer } from "./Observer";

export class Subject {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  protected notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}
