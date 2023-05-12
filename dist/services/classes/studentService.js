"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentServiceImpl = void 0;
const groupList_1 = require("../lists/groupList");
const schoolList_1 = require("../lists/schoolList");
const studentList_1 = require("../lists/studentList");
class StudentServiceImpl {
    constructor() {
        this.counter = 0;
    }
    switchStudentGroup(student, toGroup) {
        for (let group of groupList_1.groupList) {
            if (group.getId() == student.getStudentGroupId()) {
                group.studentsCount = group.studentsCount - 1;
            }
        }
        student.studentGroupId = toGroup.getId();
        toGroup.studentsCount++;
    }
    switchStudentSchool(student, toGroup, toSchool) {
        for (let group of groupList_1.groupList) {
            if (group.getId() == student.getStudentGroupId()) {
                group.studentsCount = group.studentsCount - 1;
            }
        }
        student.studentSchoolId = toSchool.getId();
        student.studentGroupId = toGroup.getId();
        toGroup.studentsCount++;
    }
    getStudentsByGender(gender) {
        const list = [];
        for (let student of studentList_1.studentList) {
            if (student.studentGender == gender) {
                list.push(student);
            }
        }
        if (list.length)
            return list;
        throw new Error("This gender not exist");
    }
    getStudentList() {
        return studentList_1.studentList;
    }
    getStudentsByGroupName(name) {
        const groups = groupList_1.groupList.filter((group) => group.groupName == name);
        const list = [];
        for (let i = 0; i < groups.length; i++) {
            for (let student of studentList_1.studentList) {
                if (student.getStudentGroupId() == groups[i].getId()) {
                    list.push(student);
                }
            }
        }
        if (list.length)
            return list;
        throw new Error("This group not exist");
    }
    getStudentsBySchoolName(name) {
        const school = schoolList_1.schoolList.filter((school) => school.schoolName == name);
        const list = [];
        for (let i = 0; i < school.length; i++) {
            for (let student of studentList_1.studentList) {
                if (student.getStudentSchoolID() == school[i].getId()) {
                    list.push(student);
                }
            }
        }
        if (list.length)
            return list;
        throw new Error("This school not exist");
    }
    create(data) {
        if (this.isExist(data))
            throw new Error("Student already exists");
        data.setId(++this.counter);
        studentList_1.studentList.push(data);
    }
    getById(id) {
        throw new Error("Method not implemented.");
    }
    deleteById(id) {
        for (let student of studentList_1.studentList) {
            if (student.getId() === id) {
                studentList_1.studentList.splice(studentList_1.studentList.indexOf(student), 1);
            }
        }
    }
    isExist(data) {
        for (let student of studentList_1.studentList) {
            if (student.studentPhoneNumber == data.studentPhoneNumber)
                return true;
        }
        return false;
    }
}
exports.StudentServiceImpl = StudentServiceImpl;
