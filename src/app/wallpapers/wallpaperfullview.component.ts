import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WallpapersListService } from './wallpapers-list-service';

@Component({
    selector: 'wallpaper-view',
    styleUrls: ['./wallpaperfullview.css'],
    providers:[WallpapersListService],
    templateUrl: './wallpaperfullview.html'
})

export class WallPaperFullViewComponent implements OnInit {

    public wallpaperlocation: string;

    constructor(private route: ActivatedRoute, private wallpapersListService: WallpapersListService) {

    }

    public ngOnInit() {
        let wallpaperObj = this.wallpapersListService.getWallpaperById(this.route.snapshot.paramMap.get('id'));
        console.log(wallpaperObj[0].location);
        this.wallpaperlocation = wallpaperObj[0].location;
    }
}
