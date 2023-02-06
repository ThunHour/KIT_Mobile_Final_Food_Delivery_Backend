import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createRestaurantCategoryService(
  RestaurantCategoryName: string,
  img: any
) {}
async function getAllRestaurantCategoryServie() {}
async function getRestaurantCategoryByIdService(id: string) {}
async function deleteRestaurantCategoryService(id: string) {}
async function getRestaurantCategoryByName(name: string) {}
async function updateRestaurantCategoryService(
  id: string,
  name: string,
  imgUrl: string
) {}

export default {
  createRestaurantCategoryService,
  getAllRestaurantCategoryServie,
  getRestaurantCategoryByIdService,
  deleteRestaurantCategoryService,
  updateRestaurantCategoryService,
  getRestaurantCategoryByName,
};
