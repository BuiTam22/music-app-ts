import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import Topic from "./models/topic.model";

dotenv.config();

database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/topics", async (req: Request, res: Response) =>{
    const topic = await Topic.find({
        deleted: false
    });
    console.log(topic);

    res.render("client/pages/topics/index.pug");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});