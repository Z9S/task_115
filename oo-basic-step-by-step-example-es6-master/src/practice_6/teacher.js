'use strict';
import Person from "../../src/practice_6/person.js";

class Teacher extends Person {
    constructor (name, age, class_number) {
        super(name, age);
        this.klass = class_number;
    }

    introduce(){
        if (this.klass === undefined )
            return super.introduce() + " I am a Teacher. I teach No Class.";
        else
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass}.`;
    }
}


module.exports =  Teacher;
