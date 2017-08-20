import { Injectable } from "@angular/core"
@Injectable()
export class SongsListService {
    public songsList:any;

    constructor() {
        this.songsList = [
            {
                id: "201",
                name: "Boom Boom",
                category: "Hindi",
                genre: "pop",
                location:'./app/songs/songs-fav/Biddu-Boom-Boom.mp3'
            },
                        {
                id: "202",
                name: "Tron Legacy Encom II",
                category: "English",
                genre: "synthwave",
                location:"./app/songs/songs-fav/TronLegacy-Encom.mp3"
            },
                        {
                id: "203",
                name: "300 Rise of an Empire",
                category: "English",
                genre: "ost",
                location:"./app/songs/songs-fav/300.mp3"
            },
                        {
                id: "204",
                name: "Desperado",
                category: "Mexican",
                genre: "ost",
                location:"./app/songs/songs-fav/Desperado.mp3"
            },
                        {
                id: "205",
                name: "Get Out Of My Life",
                category: "English",
                genre: "ost",
                location:"./app/songs/songs-fav/GetOutOfMyLife.mp3"
            }
        ]
    }    

    public getSongsCategory():any {
        let songsCategoryList:any = [];
        for(let i=0; i< this.songsList.length; i++) {
            if(songsCategoryList.indexOf(this.songsList[i].category) ==-1) {
                songsCategoryList.push(this.songsList[i].category);
            }
        }
        return songsCategoryList;
    }

    public getSongsListByCategory(songcategory:string) {
        let songsListByCategory:any = [];
        for(let i=0; i< this.songsList.length; i++) {
            if(this.songsList[i].category==songcategory) {
                songsListByCategory.push(this.songsList[i]);
            }
        }
        return songsListByCategory;
    }
}