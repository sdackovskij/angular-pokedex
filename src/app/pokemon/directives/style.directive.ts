import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

interface AfterContentInit {
  ngAfterContentInit(): void;
}

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements AfterContentInit {

  @Input('appStyle') damage: number;

  constructor(private el: ElementRef, private r: Renderer2) {
   }

  ngAfterContentInit(): void {
    if (this.damage > 50) {
      this.r.setStyle(this.el.nativeElement, 'border', '5px solid red');
    }
   }
}
