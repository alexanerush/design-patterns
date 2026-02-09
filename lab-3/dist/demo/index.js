"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ThirdPartyPaymentAdapter_1 = require("../adapters/ThirdPartyPaymentAdapter");
const LoggingDecorator_1 = require("../decorators/LoggingDecorator");
const ErrorHandlingDecorator_1 = require("../decorators/ErrorHandlingDecorator");
async function main() {
    const adapter = new ThirdPartyPaymentAdapter_1.ThirdPartyPaymentAdapter();
    const provider = new LoggingDecorator_1.LoggingDecorator(new ErrorHandlingDecorator_1.ErrorHandlingDecorator(adapter));
    const ok = await provider.pay({
        orderId: "order-1001",
        amount: 12.5,
        currency: "EUR",
        customerEmail: "sasha@example.com",
    });
    console.log("RESULT 1:", ok);
    const maybeFail = await provider.pay({
        orderId: "order-1002",
        amount: 13,
        currency: "EUR",
        customerEmail: "sasha@example.com",
    });
    console.log("RESULT 2:", maybeFail);
}
main();
