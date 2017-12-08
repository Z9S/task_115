'use strict';
import Person from "../../src/practice_7/person.js";

class Teacher extends Person {
    constructor (name, age, class_number) {
        super(name, age);
        this.klass = class_number;
    }

    introduce(){
        if (this.klass === undefined )
            return super.introduce() + " I am a Teacher. I teach No Class.";
        else
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klass.number}.`;
    }

    introduceWith(student_Name) {
        if (this.klass === student_Name.klass)
            return super.introduce() + " "+ "I am a Teacher. I teach " + `${student_Name.name}.`;
        else
            return super.introduce() + " "+ "I am a Teacher. I don't teach " + `${student_Name.name}.`;
    }
}

module.exports = Teacher;

