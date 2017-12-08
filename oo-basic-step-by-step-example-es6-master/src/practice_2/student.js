'use strict';
import Person from "../../src/practice_2/person.js";

class Student extends Person {
    constructor (name, age, class_number) {
        super(name, age);
        this.klass = class_number;
    }
    introduce(){
        return `I am a Student. I am at Class ${this.klass}.`;
    }
}


module.exports =  Student;
