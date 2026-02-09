export type PaymentRequest = {
    orderId: string;
    amount: number;
    currency: "EUR" | "USD" | "GBP";
    customerEmail: string;
  };
  
  export type PaymentResult =
    | { ok: true; transactionId: string }
    | { ok: false; error: string };
  
  export interface PaymentProvider {
    pay(req: PaymentRequest): Promise<PaymentResult>;
  }
  