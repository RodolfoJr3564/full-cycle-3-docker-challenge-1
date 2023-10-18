import EventInterface from "../../@shared/event/event.interface";
import Customer from "../entity/customer";
import Address from "../value-object/address";

export default class CustomerAddressChangedEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: Customer & { Address: Address };

  constructor(eventData: Customer & { Address: Address }) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
