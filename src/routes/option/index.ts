import { Router } from "express";
import res from "./option.controler";

export default () => {
  const router: Router = Router();

  router.get("/get", res.getAllOption);

  return router;
};
