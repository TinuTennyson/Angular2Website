import { Directive, HostListener, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[focus-tile]'
})
export class TileHoverDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer) {

    }
    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', '170px');
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'height', '130px');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', '160px');
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'height', '120px');
    }

}