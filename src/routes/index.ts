import express from "express";
import welcome from "./welcome";
const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

routes.use("/welcome", welcome);

export default routes;