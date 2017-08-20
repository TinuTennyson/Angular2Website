import { Component } from '@angular/core';
import { WallpapersListService } from './wallpapers-list-service';
import { Router } from '@angular/router';

@Component({
    selector: 'wallpapers-list',
    templateUrl: './wallpapers-list.html',
    providers: [WallpapersListService],
    styleUrls:['./wallpapers-list.css']
})

export class WallpapersListComponent {
    public wallpaperCategories:any[];
    public wallpapersLists:any[];

    constructor(private router: Router, private wallpapersListService: WallpapersListService) {
        this.wallpaperCategories = this.wallpapersListService.getWallpaperCategories();
    }

    public navigateTo(category:string) {
        this.router.navigate(['/wallpapers', category]);
    }

    
}