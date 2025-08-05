"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.access = access;
function access(role) {
    if (role == 'admin') {
        return 'success';
    }
    else {
        return 'fail';
    }
}
