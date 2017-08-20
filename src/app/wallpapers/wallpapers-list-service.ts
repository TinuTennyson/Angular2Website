export class WallpapersListService {
    public wallpaperCategory:any[];
    public wallpapersList:any[];

    constructor() {
        this.wallpaperCategory = ["Cartoons", "SuperHeroes", "Actors"];
        this.wallpapersList = [{
            id: "101",
            name:"Dragon Ball Z",
            category:"Cartoons",
            location:"./app/wallpapers/images/dbz.jpg"
        },{
            id: "102",
            name:"X-Men",
            category:"Cartoons",
            location:"./app/wallpapers/images/xmen.jpg"
        },{
            id: "103",
            name:"Batman",
            category:"SuperHeroes",
            location:"./app/wallpapers/images/batman.jpg"
        },{
            id: "104",
            name:"Superman",
            category:"SuperHeroes",
            location:"./app/wallpapers/images/superman.jpg"
        },{
            id: "105",
            name:"Chris Evans",
            category:"Actors",
            location:"./app/wallpapers/images/chris_evans.jpg"
        }];
    }

    public getWallpaperByCategory(category:string):any {
        let listArray = [];
        for(let i=0; i<this.wallpapersList.length;i++){
            if(this.wallpapersList[i].category==category) {
                listArray.push(this.wallpapersList[i]);
            }
        }
        return listArray;
    }

    public getWallpaperCategories():any {
        return this.wallpaperCategory;
    }

    public getWallpaperById(id:string):any {
        let listArray = [];
        for(let i=0; i<this.wallpapersList.length;i++){
            if(this.wallpapersList[i].id==id) {
                listArray.push(this.wallpapersList[i]);
            }
        }
        return listArray;
    }
}