import { Router } from "express";
import res from "./orderTable.controller";

export default () => {
  const router: Router = Router();
  router.get("/", (req, res) => {
    res.status(200).send({
      msg: "hello world",
    });
  });
  router.get("/get", res.getAllOrderTable);
  router.get("/get/:id", res.getOrderTableById);
  router.post("/create", res.createOrderTable);
  router.put("/update", res.updateOrderTable);
  router.delete("/delete/:id", res.deleteOrderTable);

  return router;
};
