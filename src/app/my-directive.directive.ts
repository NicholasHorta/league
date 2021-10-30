import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  // constructor(private item: ElementRef, private render: Renderer2) { }

  // ngOnInit(){
  //   console.log('%cmy-directive.directive.ts line:11 "WORKING YOU FAG!"', 'color: #007acc;', "WORKING YOU FAG!");
  // }
  // mayVar = this.item.nativeElement.id

  // @HostBinding('style.backgroundColor') colorVar: string = 'transparent'

  // @HostListener('mouseover') mouseover(eventData: Event){
  //   // this.item.nativeElement.style
  //   console.dir(this.item.nativeElement);
  //   console.log('%cmy-directive.directive.ts line:11 this.render', 'color: #007acc;', this.render);
  //   this.colorVar = 'yellow'
  // }
  // @HostListener('mouseleave') mouseleave(eventData: Event){
  //   this.colorVar = 'yellow'
  // }
  // @HostListener('click') click(eventData: Event){
  //   this.colorVar = 'blue'
  // }


}
