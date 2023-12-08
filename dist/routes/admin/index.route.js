"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_route_1 = require("./dashboard.route");
const topics_route_1 = require("./topics.route");
const song_route_1 = require("./song.route");
const upload_route_1 = require("./upload.route");
const config_1 = require("../../config/config");
const adminRoutes = (app) => {
    const PATH_ADMIN = `/${config_1.systemConfig.prefixAdmin}`;
    app.use(`${PATH_ADMIN}/dashboard`, dashboard_route_1.dashboardRoutes);
    app.use(`${PATH_ADMIN}/topics`, topics_route_1.topicRoutes);
    app.use(`${PATH_ADMIN}/songs`, song_route_1.songRoutes);
    app.use(`${PATH_ADMIN}/upload`, upload_route_1.uploadRoutes);
};
exports.default = adminRoutes;
