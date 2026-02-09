"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlingDecorator = void 0;
class ErrorHandlingDecorator {
    constructor(wrapped) {
        this.wrapped = wrapped;
    }
    async pay(req) {
        try {
            return await this.wrapped.pay(req);
        }
        catch (e) {
            const msg = e?.message ? String(e.message) : "Unknown exception";
            return { ok: false, error: `Exception: ${msg}` };
        }
    }
}
exports.ErrorHandlingDecorator = ErrorHandlingDecorator;
