import { prisma, Restaurant } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { respone } from "../../payload/respone/defaultRespone";
import restaurantService from "./restaurant.service";

async function createRestaurant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const restraurant: Restaurant = req.body.restraurant;
    const createdRestraurant = await restaurantService.createRestaurantService(
      restraurant
    );
    respone(res, createdRestraurant, "success", 201);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}

async function getRestaurantById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const restraurant = await restaurantService.getRestaurantByIdService(id);
    respone(res, restraurant, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function getAllRestaurant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const restraurants: Restaurant[] =
      await restaurantService.getAllRestaurantServie();
    respone(res, restraurants, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function deleteRestaurant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const deletedRestraurant = await restaurantService.deleteRestaurantService(
      id
    );
    respone(res, deletedRestraurant, "success", 204);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function updateRestaurant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const restraurant: Restaurant = req.body.restraurant;
    const updatedRestraurant = await restaurantService.updateRestaurantService(
      restraurant
    );
    respone(res, updatedRestraurant, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
export default {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurant,
  getRestaurantById,
  updateRestaurant,
};
