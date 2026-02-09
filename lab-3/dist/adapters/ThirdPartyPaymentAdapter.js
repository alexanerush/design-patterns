"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdPartyPaymentAdapter = void 0;
class ThirdPartyPaymentGateway {
    async makePayment(payload) {
        if (payload.totalCents <= 0)
            return { success: false, message: "Amount must be > 0" };
        if (payload.totalCents % 13 === 0)
            return { success: false, message: "Gateway rejected payment" };
        return { success: true, id: `tx_${payload.invoiceId}_${Date.now()}` };
    }
}
class ThirdPartyPaymentAdapter {
    constructor(gateway = new ThirdPartyPaymentGateway()) {
        this.gateway = gateway;
    }
    async pay(req) {
        const payload = {
            invoiceId: req.orderId,
            totalCents: Math.round(req.amount * 100),
            isoCurrency: req.currency,
            email: req.customerEmail,
        };
        const res = await this.gateway.makePayment(payload);
        if (res.success && res.id)
            return { ok: true, transactionId: res.id };
        return { ok: false, error: res.message ?? "Unknown payment error" };
    }
}
exports.ThirdPartyPaymentAdapter = ThirdPartyPaymentAdapter;
