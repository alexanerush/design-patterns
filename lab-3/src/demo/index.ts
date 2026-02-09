import { ThirdPartyPaymentAdapter } from "../adapters/ThirdPartyPaymentAdapter";
import { LoggingDecorator } from "../decorators/LoggingDecorator";
import { ErrorHandlingDecorator } from "../decorators/ErrorHandlingDecorator";
import { PaymentProvider } from "../payment/PaymentProvider";

async function main() {
  const adapter = new ThirdPartyPaymentAdapter();
  const provider: PaymentProvider = new LoggingDecorator(new ErrorHandlingDecorator(adapter));

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
