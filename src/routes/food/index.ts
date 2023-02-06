import { Router } from "express";
import res from "./food.controller";

export default () => {
  const router: Router = Router();
  router.get("/", (req, res) => {
    res.status(200).send({
      msg: "hello world",
    });
  });
  router.get("/get", res.getAllFood);
  router.get("/get/:id", res.getFoodById);
  router.post("/create", res.createFood);
  router.put("/update", res.updateFood);
  router.delete("/delete/:id", res.deleteFood);

  return router;
};
