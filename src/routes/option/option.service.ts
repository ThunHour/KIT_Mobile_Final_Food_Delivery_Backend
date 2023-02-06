import { Food, Option, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createOptionService(size: string, food: Food) {
  const option: Option = await prisma.option.create({
    data: {
      size: size,
      foodId: food.id,
    },
  });
  return option;
}

async function getAllOptionServie() {
  const options: Option[] = await prisma.option.findMany();
  return options;
}
async function getOptionByIdService(id: string) {
  const option: Option = await prisma.option.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
  return option;
}
async function deleteOptionService(id: string) {
  const option: Option = await prisma.option.delete({
    where: {
      id: id,
    },
  });
  return option;
}

async function updateOptionService(option: Option) {
  const updatedOption: Option = await prisma.option.update({
    where: {
      id: option.id,
    },
    data: {
      size: option.size,
    },
  });
  return updatedOption;
}

export default {
  createOptionService,
  getAllOptionServie,
  getOptionByIdService,
  deleteOptionService,
  updateOptionService,
};
