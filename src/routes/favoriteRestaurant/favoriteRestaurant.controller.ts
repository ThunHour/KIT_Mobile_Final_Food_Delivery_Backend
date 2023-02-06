import { NextFunction, Request, Response } from "express";
import { respone } from "../../payload/respone/defaultRespone";
async function createFavoriteRestaurant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}

async function getFavoriteRestaurantById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function getAllFavoriteRestaurant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function deleteFavoriteRestaurant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function updateFavoriteRestaurant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
export default {
  createFavoriteRestaurant,
  deleteFavoriteRestaurant,
  getAllFavoriteRestaurant,
  getFavoriteRestaurantById,
  updateFavoriteRestaurant,
};
