import { PaymentProvider, PaymentRequest, PaymentResult } from "../payment/PaymentProvider";

export class LoggingDecorator implements PaymentProvider {
  constructor(private wrapped: PaymentProvider) {}

  async pay(req: PaymentRequest): Promise<PaymentResult> {
    const started = Date.now();
    console.log(`[pay] start order=${req.orderId} amount=${req.amount} ${req.currency}`);

    const result = await this.wrapped.pay(req);

    const ms = Date.now() - started;
    if (result.ok) {
      console.log(`[pay] success tx=${result.transactionId} (${ms}ms)`);
    } else {
      console.log(`[pay] fail err="${result.error}" (${ms}ms)`);
    }

    return result;
  }
}
