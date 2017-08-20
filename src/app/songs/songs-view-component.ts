import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'songs-view-component',
    styleUrls:['./songs-view-component.css'],
    templateUrl: './songs-view-component.html'
})
export class SongsViewComponent {
    @Input() showview: boolean; 
    @Input() songslist: any;
    @Output() toggleview = new EventEmitter<boolean>();

    public goBack() {
        this.toggleview.emit(true);
    }
}