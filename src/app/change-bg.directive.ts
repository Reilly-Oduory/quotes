import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective implements OnChanges{

  @Input() appChangeBg: boolean = false;

  constructor(private elem:ElementRef) { 
    this.changeBackground();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.changeBackground();
  }

  private changeBackground() {
    if(this.appChangeBg) {
      this.elem.nativeElement.style.background='yellow';
    } else {
      this.elem.nativeElement.style.background=''
    }
  }
}
