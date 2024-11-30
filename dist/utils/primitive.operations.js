"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operateOnPrimitives = void 0;
const operateOnPrimitives = () => {
    const numberExample = 42;
    const stringExample = "Hello";
    const booleanExample = true;
    console.log("Number Operation:", numberExample * 2);
    console.log("String Operation:", stringExample.toUpperCase());
    console.log("Boolean Operation:", !booleanExample);
};
exports.operateOnPrimitives = operateOnPrimitives;
