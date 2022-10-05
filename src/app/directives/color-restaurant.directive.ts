import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorRestaurant]'
})
export class ColorRestaurantDirective {

  @Input()
  set appColorRestaurant(value: string) {
    if (parseFloat(value) > 2) {
      this._renderer.setStyle(this._el.nativeElement, "background-color", "yellow")
    }
    else if (parseFloat(value) < 1 && parseFloat(value) >= 0) {
      this._renderer.setStyle(this._el.nativeElement, "background-color", "red")
    }
    else {
      this._renderer.setStyle(this._el.nativeElement, "background-color", "")
    }
  }
  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

}
