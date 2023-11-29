import { Express } from "express";
import { topicRoutes } from "./topic.route";

const clientRoutes = (app: Express) => {

    app.use("/topics", topicRoutes);

};

export default clientRoutes;