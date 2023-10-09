import Order from "../../../../domain/checkout/entity/order";
import OrderItem from "../../../../domain/checkout/entity/order_item";
import OrderRepositoryInterface from "../../../../domain/checkout/repository/order-repository.interface";
import OrderItemModel from "./order-item.model";
import OrderModel from "./order.model";

export default class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  async find(id: string): Promise<Order> {
    const orderModel = await OrderModel.findByPk(id, {
      include: [{ model: OrderItemModel }],
    });

    return this.orderEntityOf(orderModel);
  }

  async findAll(): Promise<Order[]> {
    const orderModels = await OrderModel.findAll({
      include: [{ model: OrderItemModel }],
    });

    return orderModels.map(this.orderEntityOf);
  }

  async update(entity: Order): Promise<void> {
    const orderModel = await OrderModel.findByPk(entity.id, {
      include: [{ model: OrderItemModel }],
    });

    Promise.all(
      entity.items.map((item) => {
        const orderItem = orderModel.items.find(({ id }) => id === item.id);

        orderItem.set({
          quantity: item.quantity,
        });

        orderItem.save();
      })
    );

    await orderModel.update({
      total: entity.total(),
    });

    await orderModel.save();
  }

  private orderEntityOf(orderModel: OrderModel): Order {
    const items = orderModel?.items || [];
    return new Order(
      orderModel.id,
      orderModel.customer_id,
      items.map(
        (item) =>
          new OrderItem(
            item.id,
            item.name,
            item.price,
            item.product_id,
            item.quantity
          )
      )
    );
  }
}
