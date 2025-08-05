"use strict";
// 1-
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
//A- Types
var x = 'Tarek';
var age = 19;
var student = true;
var myname = 'Mohamed';
//arrays
var arr = [1, 2, 3, 4, 5, 5];
var anyArr = ['Tarek', 1, true, 5, 19];
//tuples//array with specific types
var user = ['Mohamed', 18];
//B- Union types
var id;
id = 123123;
id = 'meoamdiwmdi';
//C- functions with type
function order(customer, order, id) {
    return "Order made to ".concat(customer, " contains: ").concat(order, " with id: ").concat(id);
}
;
order("tarek", "shirt", 1234);
//-- optional parameters
function greet(name, id) {
    return "Hello, ".concat(name, " With ID: ").concat(id || 'not found');
}
greet("tarek");
//D- enums
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["Guest"] = "guest";
})(Role || (Role = {}));
console.log(Role.Admin); // output -> admin
//E-Generics
function printer(sth) {
    return "printed: ".concat(sth);
}
printer('YES');
printer(123);
printer(true);
//F(Bouns) - Decorators
//el target da el class /-----> el method name ely howa el method ely haten el decoretor 3leha
//descriptor object feh details ll method
//note: el descriptor.value hayba2a el method nafsaha by save it gowaha 3shan n call it ba3den 
function Logger(target, methodname, descriptor) {
    var original = descriptor.value; // by3mel save llmethod 
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("".concat(methodname, " was called with arguments: ").concat(args));
        return original.apply(this, args); // btsh8l el method ely 3mlnalha save fo2 w t apply -> 3shan tsht8l bl args bta3tha
    };
}
var Person = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _greeting_decorators;
    return _a = /** @class */ (function () {
            function Person(name) {
                this.user1 = __runInitializers(this, _instanceExtraInitializers);
                this.user1 = name;
            }
            Person.prototype.greeting = function (greeting) {
                console.log("".concat(greeting, ". my name is ").concat(this.user1));
            };
            return Person;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greeting_decorators = [Logger];
            __esDecorate(_a, null, _greeting_decorators, { kind: "method", name: "greeting", static: false, private: false, access: { has: function (obj) { return "greeting" in obj; }, get: function (obj) { return obj.greeting; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var p = new Person("Tarek");
p.greeting("Hi"); // ->  hi my name is tarek   
//G-modules
var exporter_1 = require("./exporter");
(0, exporter_1.access)('admin'); //success
(0, exporter_1.access)('guest'); //fail
// 2-
var Point2D = /** @class */ (function () {
    function Point2D(point1, point2) {
        this.x = point1;
        this.y = point2;
    }
    Point2D.prototype.calculator = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    return Point2D;
}());
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.calculator = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };
    return Point3D;
}(Point2D));
