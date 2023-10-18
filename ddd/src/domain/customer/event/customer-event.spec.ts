import EventDispatcher from "../../@shared/event/event-dispatcher";
import Customer from "../entity/customer";
import Address from "../value-object/address";
import CustomerAddressChangedEvent from "./customer-address-changed.event";
import CustomerCreatedEvent from "./customer-created.event";
import CustomerAddressChangedEventHandler from "./handler/customer-address-changed-event.handler";
import Log1CustomerCreationEventHandler from "./handler/log1-customer-creation-event.handler";
import Log2CustomerCreationEventHandler from "./handler/log2-customer-creation-event.handler";

describe("Customer events tests", () => {
  it("should be able to trigger an event when a customer is created", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler1 = new Log1CustomerCreationEventHandler();
    const eventHandler2 = new Log2CustomerCreationEventHandler();

    const eventHandler1Spy = jest.spyOn(eventHandler1, "handle");
    const eventHandler2Spy = jest.spyOn(eventHandler2, "handle");

    const CUSTOMER_CREATED_EVENT = "CustomerCreatedEvent";

    eventDispatcher.register(CUSTOMER_CREATED_EVENT, eventHandler1);
    eventDispatcher.register(CUSTOMER_CREATED_EVENT, eventHandler2);

    const customer = new Customer("1", "Customer 1");
    const customerCreatedEvent = new CustomerCreatedEvent(customer);

    eventDispatcher.notify(customerCreatedEvent);

    expect(eventHandler1Spy).toHaveBeenCalledTimes(1);
    expect(eventHandler2Spy).toHaveBeenCalledTimes(1);
  });

  it("Log1CustomerCreationEventHandler logs correctly message", () => {
    const eventHandler = new Log1CustomerCreationEventHandler();
    const customer = new Customer("1", "Customer 1");
    const customerCreatedEvent = new CustomerCreatedEvent(customer);

    const consoleSpy = jest.spyOn(console, "log");

    eventHandler.handle(customerCreatedEvent);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Esse é o primeiro console.log do evento: CustomerCreated"
    );
  });

  it("Log2CustomerCreationEventHandler logs correctly message", () => {
    const eventHandler = new Log2CustomerCreationEventHandler();
    const customer = new Customer("2", "Customer 2");
    const customerCreatedEvent = new CustomerCreatedEvent(customer);

    const consoleSpy = jest.spyOn(console, "log");

    eventHandler.handle(customerCreatedEvent);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Esse é o segundo console.log do evento: CustomerCreated"
    );
  });

  it("should be able to trigger an event when the customer address changes", () => {
    const eventHandler = new CustomerAddressChangedEventHandler();
    const customer = new Customer("2", "Customer 2");
    customer.Address = new Address("Street 1", 123, "13330-250", "São Paulo");

    const customerAddressChangedEvent = new CustomerAddressChangedEvent(
      customer
    );

    const consoleSpy = jest.spyOn(console, "log");

    eventHandler.handle(customerAddressChangedEvent);

    const expectedMessage = `Endereço do cliente: ${customer.id}, ${
      customer.name
    } alterado para: ${customer.Address.toString()}`;

    expect(consoleSpy).toHaveBeenCalledWith(expectedMessage);
  });
});
