import { Directive , ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective {
@HostListener('focus') onFocus(){
  console.log(' on focus ')
}

@HostListener('blur') onBlur(){
  console.log(' on Blur');
  let value = this.el.nativeElement.value;
  this.el.nativeElement.value = value.toLowerCase();
}
  constructor(private el : ElementRef) { }

}
