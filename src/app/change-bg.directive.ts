import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {


  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.background='yellow';
  }

}
