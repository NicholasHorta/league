import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  // constructor(private item: ElementRef, private render: Renderer2) { }

  // ngOnInit(){
  //   console.log('%cmy-directive.directive.ts line:11 "WORKING YOU FAG!"', 'color: #007acc;', "WORKING YOU FAG!");
  // }

  // @HostBinding() over: boolean = false;

  // @HostListener('mouseover') click(eventData: Event){
  //   console.log('%cmy-directive.directive.ts line:17 eventData', 'color: #007acc;', eventData);
  // }
  // @HostListener('mouseleave') mouseleave(eventData: Event){
  //   this.over = false
  // }


}
