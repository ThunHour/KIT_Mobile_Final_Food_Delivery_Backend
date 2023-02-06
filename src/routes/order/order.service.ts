import { Order, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createOrderService(order: Order) {
  const createdOrder: Order = await prisma.order.create({
    data: {
      amount: order.amount,
      orderTableId: order.orderTableId,
    },
  });
  return createdOrder;
}
async function getAllOrderServie() {
  const orders: Order[] = await prisma.order.findMany();
  return orders;
}
async function getOrderByIdService(id: string) {
  const order: Order = await prisma.order.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
  return order;
}
async function deleteOrderService(id: string) {
  const order = await prisma.order.delete({
    where: {
      id: id,
    },
  });
  return order;
}
async function getOrderByName(name: string) {}
async function updateOrderService(order: Order) {
  const updatedOrder: Order = await prisma.order.update({
    where: {
      id: order.id,
    },
    data: {
      amount: order.amount,
      orderTableId: order.orderTableId,
    },
  });
  return updatedOrder;
}

export default {
  createOrderService,
  getAllOrderServie,
  getOrderByIdService,
  deleteOrderService,
  updateOrderService,
  getOrderByName,
};
