import { Request, Response } from "express";
import Song from "../../models/song.model";
import Topic from "../../models/topic.model";
import Singer from "../../models/singer.model";
import { systemConfig } from "../../config/config";


// [GET] /admin/songs
export const index = async (req: Request, res: Response) => {
    try {
        const songs = await Song.find({
            deleted: false,
            status: "active"
        });

        res.render("admin/pages/songs/index", {
            songs: songs,
            pageTitle: "Danh sách bài hát"
        })
    } catch (error) {
        console.log(error);
        res.render("admin/pages/page-404");
    }
}


// [GET] /admin/songs/create
export const create = async (req: Request, res: Response) => {
    try {
        const topics = await Topic.find({
            status: "active",
            deleted: false
        }).select("title");

        const singers = await Singer.find({
            status: "active",
            deleted: false
        }).select("fullName");

        res.render("admin/pages/songs/create", {
            pageTitle: "Thêm mới bài hát",
            topics: topics,
            singers: singers
        });
    } catch (error) {
        console.log(error);
        res.render("admin/pages/page-404");
    }
};


// [POST] /admin/songs/create
export const createPost = async (req: Request, res: Response) => {
    try {

        let avatar = "";
        let audio = "";

        if (req.body.avatar) {
            avatar = req.body.avatar[0];
        }

        if (req.body.audio) {
            audio = req.body.audio[0];
        }
        const dataSong = {
            title: req.body.title,
            topicId: req.body.topicId,
            singerId: req.body.singerId,
            description: req.body.description,
            status: req.body.status,
            avatar: avatar,
            audio: audio,
            lyrics: req.body.lyrics
        };

        const song = new Song(dataSong);
        await song.save();

        res.redirect(`/${systemConfig.prefixAdmin}/songs`);
    } catch (error) {
        console.log(error);
        res.render('admin/pages/page-404');
    }
};