import { Router } from "express";
import res from "./order.controller";

export default () => {
  const router: Router = Router();
  router.get("/", (req, res) => {
    res.status(200).send({
      msg: "hello world",
    });
  });
  router.get("/get", res.getAllOrder);
  router.get("/get/:id", res.getOrderById);
  router.post("/create", res.createOrder);
  router.put("/update", res.updateOrder);
  router.delete("/delete/:id", res.deleteOrder);

  return router;
};
