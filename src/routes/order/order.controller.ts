import { Order } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { respone } from "../../payload/respone/defaultRespone";
import orderService from "./order.service";

async function createOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const order = req.body.order;
    const createdOrder: Order = await orderService.createOrderService(order);
    respone(res, createdOrder, "success", 201);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}

async function getOrderById(req: Request, res: Response, next: NextFunction) {
  try {
    const id: string = req.params.id;
    const order: Order = await orderService.getOrderByIdService(id);
    respone(res, order, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function getAllOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const orders: Order[] = await orderService.getAllOrderServie();
    respone(res, orders, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function deleteOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const id: string = req.params.id;
    const deletedOrder = await orderService.deleteOrderService(id);
    respone(res, deletedOrder, "success", 204);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function updateOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const order: Order = req.body.order;
    const updatedOrder: Order = await orderService.updateOrderService(order);
    respone(res, updatedOrder, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
export default {
  createOrder,
  deleteOrder,
  getAllOrder,
  getOrderById,
  updateOrder,
};
