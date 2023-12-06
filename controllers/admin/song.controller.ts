import { Request, Response } from "express";
import Song from "../../models/song.model";

export const index = async (req: Request, res: Response) =>{
    try {
        const songs = await Song.find({
            deleted: false,
            status: "active"
        });

        res.render("admin/pages/songs/index",{
            songs: songs,
            pageTitle: "Danh sách bài hát"
        })
    } catch (error) {
        console.log(error);
        res.render("admin/pages/page-404");
    }
}