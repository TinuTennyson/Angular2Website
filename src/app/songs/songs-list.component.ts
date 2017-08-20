import { Component } from  '@angular/core';
import { SongsListService } from './songs-list-service'

@Component({
    selector: 'songs-list',
    templateUrl:'./songs-list.html',
    styleUrls: ['./songs-list.css']
})

export class SongsListComponent {
    public songsCategoryList:string;
    public showlist:boolean;
    public songslistbycategory: any;
    constructor(private songsListService:SongsListService) {
        this.showlist = true;
        this.songsCategoryList = this.songsListService.getSongsCategory();
    }

    public getSongsListByCategory(category:string) {
        this.songslistbycategory = this.songsListService.getSongsListByCategory(category);
        this.showlist = false;
    }

    public showListAgain(ev:any) {
        this.showlist = ev;
    }

}