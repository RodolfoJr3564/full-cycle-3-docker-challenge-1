import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class CustomerAddressChangedEventHandler
  implements EventHandlerInterface<CustomerAddressChangedEvent>
{
  handle({
    eventData: { id, name, Address },
  }: CustomerAddressChangedEvent): void {
    console.log(
      `Endereço do cliente: ${id}, ${name} alterado para: ${Address.toString()}`
    );
  }
}
