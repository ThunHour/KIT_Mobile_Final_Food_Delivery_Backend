import { NextFunction, Request, Response } from "express";
import { respone } from "../../payload/respone/defaultRespone";
import foodService from "./food.service";
import { Food, Image, PrismaClient } from "@prisma/client";

async function createFood(req: Request, res: Response, next: NextFunction) {
  const food: Food = {
    id: "",
    orderId: "",
    name: req.body.name,
    cookingDuration: req.body.cookingDuration,
    price: req.body.price,
  };

  try {
    const createdFood: Food = await foodService.createFoodService(
      food,
      req.body.imgUrl
    );
    respone(res, createdFood, "created", 201);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}

async function getFoodById(req: Request, res: Response, next: NextFunction) {
  try {
    const food: Food = await foodService.getFoodByIdService(req.params.id);
    respone(res, food, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function getAllFood(req: Request, res: Response, next: NextFunction) {
  try {
    const foods: Food[] = await foodService.getAllFoodServie();
    respone(res, foods, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function deleteFood(req: Request, res: Response, next: NextFunction) {
  try {
    await foodService.deleteFoodService(req.params.id);
    respone(res, null, "success", 204);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function updateFood(req: Request, res: Response, next: NextFunction) {
  const food: Food = {
    id: req.body.id,
    name: req.body.name,
    cookingDuration: req.body.cookingDuration,
    price: req.body.price,
    orderId: "",
  };

  let imgUrl: string = "";

  if (req.body.imgUrl) {
    imgUrl = req.body.imgUrl;
  }

  try {
    const updatedFood: Food = await foodService.updateFoodService(food, imgUrl);
    respone(res, updatedFood, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
export default {
  createFood,
  deleteFood,
  getAllFood,
  getFoodById,
  updateFood,
};
