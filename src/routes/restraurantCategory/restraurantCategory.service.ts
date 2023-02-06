import { PrismaClient, RestaurantCategory } from "@prisma/client";
const prisma = new PrismaClient();

async function createRestraurantCategoryService(
  restraurantCategory: RestaurantCategory
) {
  const createdRestraurantCategory = await prisma.restaurantCategory.create({
    data: {
      categoryName: restraurantCategory.categoryName,
    },
  });

  return createdRestraurantCategory;
}
async function getAllRestraurantCategoryServie() {
  const restraurantCategories: RestaurantCategory[] =
    await prisma.restaurantCategory.findMany();
  return restraurantCategories;
}
async function getRestraurantCategoryByIdService(id: string) {
  const restraurantCategory: RestaurantCategory =
    await prisma.restaurantCategory.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

  return restraurantCategory;
}
async function deleteRestraurantCategoryService(id: string) {
  const restraurantCategory = await prisma.restaurantCategory.delete({
    where: {
      id: id,
    },
  });

  return restraurantCategory;
}
async function getRestraurantCategoryByName(name: string) {
  const restraurantCategories: RestaurantCategory[] =
    await prisma.restaurantCategory.findMany({
      where: {
        categoryName: name,
      },
    });

  return restraurantCategories;
}
async function updateRestraurantCategoryService(
  restraurantCategory: RestaurantCategory
) {
  const updatedRestraurantCategory: RestaurantCategory =
    await prisma.restaurantCategory.update({
      where: {
        id: restraurantCategory.id,
      },
      data: {
        categoryName: restraurantCategory.categoryName,
      },
    });
  return updatedRestraurantCategory;
}

export default {
  createRestraurantCategoryService,
  getAllRestraurantCategoryServie,
  getRestraurantCategoryByIdService,
  deleteRestraurantCategoryService,
  updateRestraurantCategoryService,
  getRestraurantCategoryByName,
};
