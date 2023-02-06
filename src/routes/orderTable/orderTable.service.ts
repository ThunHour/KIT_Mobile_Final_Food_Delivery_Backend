import { OrderTable, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createOrderTableService(userId: string) {
  const createdOrderTable: OrderTable = await prisma.orderTable.create({
    data: {
      userId: userId,
    },
  });
  return createdOrderTable;
}
async function getAllOrderTableServie() {
  const orderTables: OrderTable[] = await prisma.orderTable.findMany({
    include: {
      user: true,
    },
  });
  return orderTables;
}
async function getOrderTableByIdService(id: string) {
  const orderTable: OrderTable = await prisma.orderTable.findUniqueOrThrow({
    where: {
      id: id,
    },
  });

  return orderTable;
}
async function deleteOrderTableService(id: string) {
  const orderTable: OrderTable = await prisma.orderTable.delete({
    where: {
      id: id,
    },
  });
  return orderTable;
}
async function getOrderTableByName(name: string) {}
async function updateOrderTableService(userId: string, id: string) {
  const updatedOrderTable: OrderTable = await prisma.orderTable.update({
    where: {
      id: id,
    },
    data: {
      userId: userId,
    },
  });
  return updatedOrderTable;
}

export default {
  createOrderTableService,
  getAllOrderTableServie,
  getOrderTableByIdService,
  deleteOrderTableService,
  updateOrderTableService,
  getOrderTableByName,
};
