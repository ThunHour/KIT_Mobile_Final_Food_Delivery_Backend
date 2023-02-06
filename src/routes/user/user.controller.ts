import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { respone } from "../../payload/respone/defaultRespone";
import userService from "./user.service";

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user: User = req.body.user;
    const createdUser = await userService.createUserService(user);
    respone(res, createdUser, "success", 201);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}

async function getUserById(req: Request, res: Response, next: NextFunction) {
  try {
    const id: string = req.params.id;
    const user = await userService.getUserByIdService(id);
    respone(res, user, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function getAllUser(req: Request, res: Response, next: NextFunction) {
  try {
    const users: User[] = await userService.getAllUserServie();
    respone(res, users, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    const id: string = req.params.id;
    const user = await userService.deleteUserService(id);
    respone(res, user, "success", 204);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.body.user;
    const updatedUser = await userService.updateUserService(user);
    respone(res, updatedUser, "success", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
export default {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
};
