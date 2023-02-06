import { Router } from "express";
import res from "./restraurantCategory.controller";

export default () => {
  const router: Router = Router();
  router.get("/", (req, res) => {
    res.status(200).send({
      msg: "hello world",
    });
  });
  router.get("/get", res.getAllRestraurantCategory);
  router.get("/get/:id", res.getRestraurantCategoryById);
  router.post("/create", res.createRestraurantCategory);
  router.put("/update", res.updateRestraurantCategory);
  router.delete("/delete/:id", res.deleteRestraurantCategory);

  return router;
};
