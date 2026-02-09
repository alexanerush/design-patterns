"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingDecorator = void 0;
class LoggingDecorator {
    constructor(wrapped) {
        this.wrapped = wrapped;
    }
    async pay(req) {
        const started = Date.now();
        console.log(`[pay] start order=${req.orderId} amount=${req.amount} ${req.currency}`);
        const result = await this.wrapped.pay(req);
        const ms = Date.now() - started;
        if (result.ok) {
            console.log(`[pay] success tx=${result.transactionId} (${ms}ms)`);
        }
        else {
            console.log(`[pay] fail err="${result.error}" (${ms}ms)`);
        }
        return result;
    }
}
exports.LoggingDecorator = LoggingDecorator;
