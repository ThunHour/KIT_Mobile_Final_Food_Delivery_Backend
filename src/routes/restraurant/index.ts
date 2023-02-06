import { Router } from "express";
import res from "./restaurant.controller";

export default () => {
  const router: Router = Router();
  router.get("/", (req, res) => {
    res.status(200).send({
      msg: "hello world",
    });
  });
  router.get("/get", res.getAllRestaurant);
  router.get("/get/:id", res.getRestaurantById);
  router.post("/create", res.createRestaurant);
  router.put("/update", res.updateRestaurant);
  router.delete("/delete/:id", res.deleteRestaurant);

  return router;
};
