'use strict';
import Person from "../../src/practice_8/person.js";

class Teacher extends Person {
    constructor (id, name, age, class_number) {
        super(id, name, age);
        this.klass = class_number;
    }

    introduce(){
        if (this.klass === undefined )
            return super.introduce() + " I am a Teacher. I teach No Class.";
        else
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass.number}.`;
    }
}

module.exports = Teacher;
