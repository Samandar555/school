"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolServiceImp = void 0;
const schoolList_1 = require("../lists/schoolList");
class SchoolServiceImp {
    constructor() {
        //   listSchools: School[];
        this.counter = 0;
    }
    getSchoolList() {
        return schoolList_1.schoolList;
    }
    getSchoolsByState(state) {
        const list = [];
        for (let school of schoolList_1.schoolList) {
            if (school.schoolState === state) {
                list.push(school);
            }
        }
        return list;
    }
    getSchoolByName(name, state) {
        for (let school of schoolList_1.schoolList) {
            if (school.schoolName === name && school.schoolState == state) {
                return school;
            }
        }
        throw new Error(state + " has not this " + name + " school");
    }
    create(data) {
        if (this.isExist(data))
            throw new Error("School already exist");
        data.setId(++this.counter);
        schoolList_1.schoolList.push(data);
    }
    getById(id) {
        for (let school of schoolList_1.schoolList) {
            if (school.getId() === id) {
                return school;
            }
        }
        throw new Error("School not found");
    }
    deleteById(id) {
        for (let school of schoolList_1.schoolList) {
            if (school.getId() === id) {
                schoolList_1.schoolList.splice(schoolList_1.schoolList.indexOf(school), 1);
                return;
            }
        }
        throw new Error("School not found");
    }
    isExist(data) {
        for (let school of schoolList_1.schoolList) {
            if (school.getId == data.getId) {
                return true;
            }
        }
        return false;
    }
}
exports.SchoolServiceImp = SchoolServiceImp;
