import express, { Request, Response } from "express";

const welcomeRoutes = express.Router();

// define a route handler for the default home page
welcomeRoutes.get("/", (req: Request, res: Response) => {
    const { name } = req.query;
    res.send(`Hello ${name}!`);
});

// define a route handler for welcome by name from path /welcome/:name
welcomeRoutes.get("/:name/:age", (req: Request, res: Response) => {
    const { name, age } = req.params;
    res.send(`Hello ${name}!, your age is ${age}`);
});

// define a route handler for welcome by name from body
welcomeRoutes.post("/", (req: Request, res: Response) => {
    const { name } = req.body;
    console.log(name);
    res.send(`Hello ${name}!`);
});

export default welcomeRoutes;