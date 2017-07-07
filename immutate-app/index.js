"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutate_lib_1 = require("immutate-lib");
class Test {
    updateLocally(selectedIndex, newIndex, where) {
        this.orderData = immutate_lib_1.moveListItem(this.orderData, selectedIndex, newIndex, where);
    }
}
//# sourceMappingURL=index.js.map