import { Application, Router } from "express";
import res from "./RestaurantCategory/index";
import foodRoute from "./food/index";
import optionRoute from "./option/index";
import favoriteRestaurantRoute from "./favoriteRestaurant/index";
import restaurantRoute from "./restraurant/index";
import userRoute from "./user/index";
import restraurantCategoryRoute from "./restraurantCategory/index";
import orderRoute from "./order/index";
import orderTableRoute from "./orderTable/index";

export default (app: Application) => {
  const route = Router();
  app.use("/", route);
  app.use("/food", foodRoute());
  app.use("/option", optionRoute());
  app.use("/favoriteRestaurant", favoriteRestaurantRoute());
  app.use("/restaurant", restaurantRoute());
  app.use("/user", userRoute());
  app.use("/restraurantCategory", restraurantCategoryRoute());
  app.use("/order", orderRoute());
  app.use("/orderTable", orderTableRoute());

  return app;
};
