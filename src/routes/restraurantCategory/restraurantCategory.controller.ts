import { RestaurantCategory } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { respone } from "../../payload/respone/defaultRespone";
import restraurantCategoryService from "./restraurantCategory.service";

async function createRestraurantCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const restraurantCategory: RestaurantCategory = req.body.restaurantCategory;
    const createdRestraurantCategory: RestaurantCategory =
      await restraurantCategoryService.createRestraurantCategoryService(
        restraurantCategory
      );
    respone(res, createdRestraurantCategory, "success", 201);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}

async function getRestraurantCategoryById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const restruarantCategory: RestaurantCategory =
      await restraurantCategoryService.getRestraurantCategoryByIdService(id);
    respone(res, restruarantCategory, "succcess", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function getAllRestraurantCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const restraurantCategories: RestaurantCategory[] =
      await restraurantCategoryService.getAllRestraurantCategoryServie();
    respone(res, restraurantCategories, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function deleteRestraurantCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const restraurantCategory =
      await restraurantCategoryService.deleteRestraurantCategoryService(id);
    respone(res, restraurantCategory, "success", 204);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function updateRestraurantCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const name: string = req.params.name;
    const restraurantCategory: RestaurantCategory[] =
      await restraurantCategoryService.getRestraurantCategoryByName(name);
    respone(res, restraurantCategory, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
export default {
  createRestraurantCategory,
  deleteRestraurantCategory,
  getAllRestraurantCategory,
  getRestraurantCategoryById,
  updateRestraurantCategory,
};
