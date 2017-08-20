import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { WallpapersListComponent } from './wallpapers/wallpapers-list.component';
import { WallpaperViewComponent } from './wallpapers/wallpaper-view.component';
import { WallPaperFullViewComponent } from './wallpapers/wallpaperfullview.component';
import { TileHoverDirective } from './wallpapers/wallpaper-tile-directive';

import { SongsListComponent } from './songs/songs-list.component';
import { SongsListService } from './songs/songs-list-service';
import { SongsViewComponent } from './songs/songs-view-component'


import { AppComponent }  from './app.component';

const routes: Routes = [
   { path: 'wallpapers', component: WallpapersListComponent }, 
   { path: 'songs', component:SongsListComponent }, 
   { path: 'wallpapers/:category', component: WallpaperViewComponent },
   { path: 'wallpaperfullview/:id', component: WallPaperFullViewComponent}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes)],
  providers: [ SongsListService ],
  declarations: [ AppComponent, WallpapersListComponent, TileHoverDirective, WallpaperViewComponent, SongsListComponent, WallPaperFullViewComponent, SongsViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
