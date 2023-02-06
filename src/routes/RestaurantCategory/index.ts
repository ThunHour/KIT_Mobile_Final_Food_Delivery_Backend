import { Router } from "express";
import res from "../RestaurantCategory/restaurantCatrgory.controller";
const uploadFile = require("multer")();
export default () => {
  const router = Router();
  router.post("/create", res.createPartner);

  return router;
};
