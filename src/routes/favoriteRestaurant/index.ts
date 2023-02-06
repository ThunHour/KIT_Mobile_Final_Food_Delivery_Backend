import { Router } from "express";
import res from "./favoriteRestaurant.controller";

export default () => {
  const router: Router = Router();
  router.get("/", (req, res) => {
    res.status(200).send({
      msg: "hello world",
    });
  });
  router.get("/get", res.getAllFavoriteRestaurant);
  router.get("/get/:id", res.getFavoriteRestaurantById);
  router.post("/create", res.createFavoriteRestaurant);
  router.put("/update", res.updateFavoriteRestaurant);
  router.delete("/delete/:id", res.deleteFavoriteRestaurant);

  return router;
};
