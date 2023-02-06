import { OrderTable } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { respone } from "../../payload/respone/defaultRespone";
import orderTableService from "./orderTable.service";

async function createOrderTable(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId: string = req.body.userId;
    const orderTable: OrderTable =
      await orderTableService.createOrderTableService(userId);
    respone(res, orderTable, "success", 201);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}

async function getOrderTableById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const orderTable: OrderTable =
      await orderTableService.getOrderTableByIdService(id);
    respone(res, orderTable, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function getAllOrderTable(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const orderTables: OrderTable[] =
      await orderTableService.getAllOrderTableServie();
    respone(res, orderTables, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function deleteOrderTable(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const orderTable = await orderTableService.deleteOrderTableService(id);
    respone(res, orderTable, "success", 204);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function updateOrderTable(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId: string = req.body.userId;
    const id: string = req.body.id;
    const updatedOrderTable: OrderTable =
      await orderTableService.updateOrderTableService(userId, id);
    respone(res, updatedOrderTable, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
export default {
  createOrderTable,
  deleteOrderTable,
  getAllOrderTable,
  getOrderTableById,
  updateOrderTable,
};
