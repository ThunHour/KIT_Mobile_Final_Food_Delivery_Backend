import { PrismaClient, Restaurant } from "@prisma/client";
const prisma = new PrismaClient();

async function createRestaurantService(restaurant: Restaurant) {
  const createdRestraurant: Restaurant = await prisma.restaurant.create({
    data: {
      name: restaurant.name,
      location: restaurant.location,
      isPromotion: restaurant.isPromotion,
    },
  });

  return createdRestraurant;
}
async function getAllRestaurantServie() {
  const restraurant: Restaurant[] = await prisma.restaurant.findMany();
  return restraurant;
}

async function getRestaurantByIdService(id: string) {
  const restraurant: Restaurant = await prisma.restaurant.findUniqueOrThrow({
    where: {
      id: id,
    },
  });

  return restraurant;
}
async function deleteRestaurantService(id: string) {
  const restraurant = await prisma.restaurant.delete({
    where: {
      id: id,
    },
  });
  return restraurant;
}
async function getRestaurantByName(name: string) {
  const restraurant: Restaurant[] = await prisma.restaurant.findMany({
    where: {
      name: name,
    },
  });
  return restraurant;
}
async function updateRestaurantService(restraurant: Restaurant) {
  const updatedRestraurant: Restaurant = await prisma.restaurant.update({
    where: {
      id: restraurant.id,
    },
    data: {
      name: restraurant.name,
      location: restraurant.location,
      isPromotion: restraurant.isPromotion,
    },
  });

  return updatedRestraurant;
}

export default {
  createRestaurantService,
  getAllRestaurantServie,
  getRestaurantByIdService,
  deleteRestaurantService,
  updateRestaurantService,
  getRestaurantByName,
};
