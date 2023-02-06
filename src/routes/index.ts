import { Application, Router } from "express";
import res from "./RestaurantCategory/index";
export default (app: Application) => {
  const route = Router();
  app.use("/res", res);
  return app;
};
