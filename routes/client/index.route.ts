import { Express } from "express";
import { topicRoutes } from "./topic.route";
import { songRoutes } from "./song.route";
import { favoriteSongRouters } from "./favorite.route";
const clientRoutes = (app: Express) => {

    app.use("/topics", topicRoutes);
    
    app.use(`/songs`, songRoutes);

    app.use('/favorite-songs', favoriteSongRouters);

};

export default clientRoutes;