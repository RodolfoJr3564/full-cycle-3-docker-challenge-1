import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CostumerCreatedEvent from "../customer-created.event";

export default class Log1CustomerCreationEventHandler
  implements EventHandlerInterface<CostumerCreatedEvent>
{
  handle(event: CostumerCreatedEvent): void {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }
}
