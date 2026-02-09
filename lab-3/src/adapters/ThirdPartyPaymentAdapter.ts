import { PaymentProvider, PaymentRequest, PaymentResult } from "../payment/PaymentProvider";

class ThirdPartyPaymentGateway {
  async makePayment(payload: {
    invoiceId: string;
    totalCents: number;
    isoCurrency: string;
    email: string;
  }): Promise<{ success: boolean; id?: string; message?: string }> {
    if (payload.totalCents <= 0) return { success: false, message: "Amount must be > 0" };
    if (payload.totalCents % 13 === 0) return { success: false, message: "Gateway rejected payment" };

    return { success: true, id: `tx_${payload.invoiceId}_${Date.now()}` };
  }
}

export class ThirdPartyPaymentAdapter implements PaymentProvider {
  constructor(private gateway = new ThirdPartyPaymentGateway()) {}

  async pay(req: PaymentRequest): Promise<PaymentResult> {
    const payload = {
      invoiceId: req.orderId,
      totalCents: Math.round(req.amount * 100),
      isoCurrency: req.currency,
      email: req.customerEmail,
    };

    const res = await this.gateway.makePayment(payload);

    if (res.success && res.id) return { ok: true, transactionId: res.id };
    return { ok: false, error: res.message ?? "Unknown payment error" };
  }
}
