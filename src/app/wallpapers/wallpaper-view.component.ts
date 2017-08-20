import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WallpapersListService } from './wallpapers-list-service';

@Component({
    selector: 'wallpaper-view',
    providers: [WallpapersListService],
    templateUrl: './wallpaper-view.html',
    styleUrls: ['./wallpaper-view.css']
})
export class WallpaperViewComponent implements OnInit {
    public wallpapersListByCategory: any;
    constructor(private router: Router, private route: ActivatedRoute, private wallpapersListService: WallpapersListService) {

    }

    public ngOnInit() {
        let category = this.route.snapshot.paramMap.get('category');
        console.log(category);
        this.wallpapersListByCategory = this.wallpapersListService.getWallpaperByCategory(category);
    }

    public showFullSized(wallpaperObj: any) {
        this.router.navigate(['/wallpaperfullview', wallpaperObj.id]);
    }

}