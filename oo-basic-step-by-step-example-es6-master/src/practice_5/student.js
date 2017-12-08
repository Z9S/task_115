'use strict';
import Person from "../../src/practice_5/person.js";

class Student extends Person {
    constructor (name, age, class_number) {
        super(name, age);
        this.klass = class_number;
    }
    introduce(){
        return super.introduce() + " " + `I am a Student. I am at Class ${this.klass}.`;
    }
}


module.exports =  Student;
