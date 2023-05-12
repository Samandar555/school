"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const base_1 = require("./base");
class Group extends base_1.Base {
    constructor(groupName, groupDegree, studentsCount, schoolId) {
        super();
        this.groupName = groupName;
        this.groupDegree = groupDegree;
        this.studentsCount = studentsCount;
        this.schoolId = schoolId;
    }
    getGroupName() {
        return this.groupName;
    }
    getGroupDegree() {
        return this.groupDegree;
    }
}
exports.Group = Group;
