'use strict';

class Class {
    constructor(number) {
        this.number = number;
    }
    getDisplayName() {
        return `Class ${this.number}`;
    }
    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }
    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student;
            if (this.teacher !== undefined ) {
                console.log (this.teacher);
                console.log("I am " + this.teacher.name + ". I know " + student.name + " become Leader of Class " + this.number + ".");
            }
        }
        else {
            console.log("It is not one of us.");
        }

    }
    appendMember(student) {
        if (student.klass !== this) {
            student.klass = this;
            if (this.listener !== undefined ) {
                if (this.listener.isTeaching(student)) {
                    console.log("I am " + this.listener.name + ". I know " + student.name + " has joined Class " + this.number + ".");
                }
            }
        }

    }
    isIn (student) {
        if (student.klass === this) {
            return true;
        }
        else {
            return false;
        }
    }
    registerJoinListener (teacher) {
        this.listener = teacher;
    }
}

module.exports =  Class;

