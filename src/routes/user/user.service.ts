import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

async function createUserService(user: User) {
  const createdUser = await prisma.user.create({
    data: {
      name: user.name,
      gmail: user.gmail,
      phoneNumber: user.phoneNumber,
      password: user.password,
    },
  });
  return createdUser;
}
async function getAllUserServie() {
  const users: User[] = await prisma.user.findMany();

  return users;
}
async function getUserByIdService(id: string) {
  const user: User = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
  });

  return user;
}
async function deleteUserService(id: string) {
  const user: User = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  return user;
}
async function getUserByNameService(name: string) {
  const users: User[] = await prisma.user.findMany({
    where: {
      name: name,
    },
  });

  return users;
}

async function updateUserService(user: User) {
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      phoneNumber: user.phoneNumber,
      password: user.password,
    },
  });

  return updatedUser;
}

export default {
  createUserService,
  getAllUserServie,
  getUserByIdService,
  deleteUserService,
  updateUserService,
  getUserByNameService,
};
