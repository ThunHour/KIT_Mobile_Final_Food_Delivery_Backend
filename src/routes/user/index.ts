import { Router } from "express";
import res from "./user.controller";

export default () => {
  const router: Router = Router();
  router.get("/", (req, res) => {
    res.status(200).send({
      msg: "hello world",
    });
  });
  router.get("/get", res.getAllUser);
  router.get("/get/:id", res.getUserById);
  router.post("/create", res.createUser);
  router.put("/update", res.updateUser);
  router.delete("/delete/:id", res.deleteUser);

  return router;
};
