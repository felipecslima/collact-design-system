import { Directive, HostBinding, ElementRef } from '@angular/core';

const button = {
  'icon': 'cl-icon',
  'iconSmall': 'cl-icon cl-icon--small',
  'iconBig': 'cl-icon cl-icon--big',
  'iconXBig': 'cl-icon cl-icon--xbig',
};

const baseUrl = `assets/icons/`;

const setImage = (nativeElement) => {
  const iconName = nativeElement.getAttribute('name');
  if (iconName) {
    const url = `-webkit-mask-image: url(${baseUrl}${iconName}.svg)`;
    nativeElement.setAttribute('style', url);
  }
}

/** Icon **/

@Directive({
  selector: '[clIcon]'
})
export class ClIconDirective {

  constructor(elementRef: ElementRef) {
    setImage(elementRef.nativeElement);
  }

  @HostBinding('class')
  className = button['icon'];
}


/** Icon Small**/

@Directive({
  selector: '[clIconSmall]'
})
export class ClIconSmallDirective {

  constructor(elementRef: ElementRef) {
    setImage(elementRef.nativeElement);
  }

  @HostBinding('class')
  className = button['iconSmall'];
}


/** Icon Big**/

@Directive({
  selector: '[clIconBig]'
})
export class ClIconBigDirective {

  constructor(elementRef: ElementRef) {
    setImage(elementRef.nativeElement);
  }

  @HostBinding('class')
  className = button['iconBig'];
}

/** Icon XBig**/

@Directive({
  selector: '[clIconXBig]'
})
export class ClIconXBigDirective {

  constructor(elementRef: ElementRef) {
    setImage(elementRef.nativeElement);
  }

  @HostBinding('class')
  className = button['iconXBig'];
}
