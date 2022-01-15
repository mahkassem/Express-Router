// express app
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";

const app: Application = express(); // create an express application
const port = 3000; // default port to listen
app.use(cors(), bodyParser.json()); // add middlewares

// a static file server that points to the "public" directory
app.use(express.static("public"));


app.get('/example/a', function (req, res) {
    res.send('Hello from A!')
});



// call routes
app.use("/", routes);

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

export default app;