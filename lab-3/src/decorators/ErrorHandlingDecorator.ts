import { PaymentProvider, PaymentRequest, PaymentResult } from "../payment/PaymentProvider";

export class ErrorHandlingDecorator implements PaymentProvider {
  constructor(private wrapped: PaymentProvider) {}

  async pay(req: PaymentRequest): Promise<PaymentResult> {
    try {
      return await this.wrapped.pay(req);
    } catch (e: any) {
      const msg = e?.message ? String(e.message) : "Unknown exception";
      return { ok: false, error: `Exception: ${msg}` };
    }
  }
}
