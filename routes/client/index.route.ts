import { Express } from "express";
import { topicRoutes } from "./topic.route";
import { songRoutes } from "./song.route";

const clientRoutes = (app: Express) => {

    app.use("/topics", topicRoutes);
    
    app.use(`/songs`, songRoutes);

};

export default clientRoutes;