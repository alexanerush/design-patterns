"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    notify() {
        this.observers.forEach((observer) => observer.update(this));
    }
}
exports.Subject = Subject;
