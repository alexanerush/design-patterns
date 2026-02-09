"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronicsBuilder = void 0;
const ProductBuilder_1 = require("./ProductBuilder");
const ElectronicsFactory_1 = require("../factories/ElectronicsFactory");
class ElectronicsBuilder extends ProductBuilder_1.ProductBuilder {
    constructor() {
        super(new ElectronicsFactory_1.ElectronicsFactory());
    }
}
exports.ElectronicsBuilder = ElectronicsBuilder;
//# sourceMappingURL=ElectronicsBuilder.js.map