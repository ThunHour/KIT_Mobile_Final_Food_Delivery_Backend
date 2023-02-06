import { Food, Image, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createFoodService(food: Food, img: string) {
  const createdFood: Food = await prisma.food.create({
    data: {
      name: food.name,
      cookingDuration: food.cookingDuration,
      price: food.price,
    },
  });

  const image = await prisma.image.create({
    data: {
      imageUrl: img,
      foodId: createdFood.id,
    },
  });

  return createdFood;
}
async function getAllFoodServie() {
  const food: Food[] = await prisma.food.findMany({
    include: {
      Image: true,
    },
  });
  return food;
}
async function getFoodByIdService(id: string) {
  const food: Food = await prisma.food.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
  return food;
}
async function deleteFoodService(id: string) {
  const food: Food = await prisma.food.delete({
    where: {
      id: id,
    },
  });
  return food;
}
async function getFoodByName(name: string) {
  const food: Food = await prisma.food.findFirstOrThrow({
    where: {
      name: name,
    },
  });
  return food;
}
async function updateFoodService(food: Food, imgUrl: string) {
  const updatedFood: Food = await prisma.food.update({
    where: {
      id: food.id,
    },
    data: {
      name: food.name,
      price: food.price,
      cookingDuration: food.cookingDuration,
    },
  });

  if (imgUrl !== "") {
    const image: Image = await prisma.image.update({
      where: {
        foodId: food.id,
      },
      data: {
        imageUrl: imgUrl,
      },
    });
  }

  return updatedFood;
}
export default {
  createFoodService,
  getAllFoodServie,
  getFoodByIdService,
  deleteFoodService,
  updateFoodService,
  getFoodByName,
};
