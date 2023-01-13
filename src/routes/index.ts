import { Application, Router } from "express";

export default (app: Application) => {
  const route = Router();
  app.use("/", route);
  return app;
};
