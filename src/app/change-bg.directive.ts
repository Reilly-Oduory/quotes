import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  highlightQuote!: boolean;

  constructor(private elem:ElementRef) { 
    this.highlightQuote = false;
    this.elem.nativeElement.style.background='yellow';
  }

}
