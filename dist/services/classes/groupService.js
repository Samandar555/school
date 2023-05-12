"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupServiceImpl = void 0;
const groupList_1 = require("../lists/groupList");
const schoolList_1 = require("../lists/schoolList");
class GroupServiceImpl {
    //   listGroups: Group[];
    getGroupsByName(name) {
        return groupList_1.groupList.filter((group) => group.groupName == name);
    }
    getGroupsByDegree(degree) {
        return groupList_1.groupList.filter((group) => group.groupDegree == degree);
    }
    create(data) {
        if (this.isExist(data))
            throw new Error("Group already exists");
    }
    getById(id) {
        return groupList_1.groupList.find((group) => group.getId() == id);
    }
    deleteById(id) {
        for (let group of groupList_1.groupList) {
            if (group.getId() == id) {
                groupList_1.groupList.splice(groupList_1.groupList.indexOf(group), 1);
            }
        }
    }
    isExist(data) {
        for (let group of groupList_1.groupList) {
            if (group.getId == data.getId)
                return true;
        }
        return false;
    }
    getGroupsBySchoolName(name) {
        const school = schoolList_1.schoolList.find((school) => school.schoolName === name);
        const list = [];
        for (let group of groupList_1.groupList) {
            if (group.schoolId === (school === null || school === void 0 ? void 0 : school.getId()))
                list.push(group);
        }
        if (list)
            return list;
        throw new Error("Grous not found in this school");
    }
}
exports.GroupServiceImpl = GroupServiceImpl;
