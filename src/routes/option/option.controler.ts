import { Food } from "@prisma/client";
import { Option } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { respone } from "../../payload/respone/defaultRespone";
import optionService from "./option.service";

async function createOption(req: Request, res: Response, next: NextFunction) {
  try {
    const size = req.body.size;
    const food: Food = req.body.food;
    const option: Option = await optionService.createOptionService(size, food);
    respone(res, option, "success", 201);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}

async function getOptionById(req: Request, res: Response, next: NextFunction) {
  try {
    const option: Option = await optionService.getOptionByIdService(
      req.body.id
    );
    respone(res, option, "OK", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function getAllOption(req: Request, res: Response, next: NextFunction) {
  try {
    const options: Option[] = await optionService.getAllOptionServie();
    respone(res, options, "OK", 200);
    respone(res, { msg: "work" }, "success", 201);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function deleteOption(req: Request, res: Response, next: NextFunction) {
  try {
    const option: Option = await optionService.deleteOptionService(req.body.id);
    respone(res, option, "deleted", 204);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
async function updateOption(req: Request, res: Response, next: NextFunction) {
  try {
    const option: Option = req.body.option;
    const updatedOption: Option = await optionService.updateOptionService(
      option
    );
    respone(res, updatedOption, "OK", 200);
  } catch (error) {
    respone(res, null, `${error}`, 500);
  }
}
export default {
  createOption,
  deleteOption,
  getAllOption,
  getOptionById,
  updateOption,
};
