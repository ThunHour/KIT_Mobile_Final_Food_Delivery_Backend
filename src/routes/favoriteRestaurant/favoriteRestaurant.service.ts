import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createFavoriteRestaurantService(
  FavoriteRestaurantName: string,
  img: any
) {}
async function getAllFavoriteRestaurantServie() {}
async function getFavoriteRestaurantByIdService(id: string) {}
async function deleteFavoriteRestaurantService(id: string) {}
async function getFavoriteRestaurantByName(name: string) {}
async function updateFavoriteRestaurantService(
  id: string,
  name: string,
  imgUrl: string
) {}

export default {
  createFavoriteRestaurantService,
  getAllFavoriteRestaurantServie,
  getFavoriteRestaurantByIdService,
  deleteFavoriteRestaurantService,
  updateFavoriteRestaurantService,
  getFavoriteRestaurantByName,
};
