import { Directive, HostBinding, ElementRef, Input, OnInit } from '@angular/core';

const button = {
  'icon': 'cl-icon',
  'iconSmall': 'cl-icon cl-icon--small',
  'iconBig': 'cl-icon cl-icon--big',
  'iconXBig': 'cl-icon cl-icon--xbig',
};

const baseUrl = `assets/icons/`;

const setImage = (nativeElement, iconName?) => {
  try {
    if (iconName) {
      const url = `-webkit-mask-image: url(${baseUrl}${iconName}.svg)`;
      nativeElement.setAttribute('style', url);
    }
  } catch (error) {
    console.error('icon.directive.setImage()', error);
  }

}

/** Icon **/

@Directive({
  selector: '[clIcon]'
})
export class ClIconDirective implements OnInit {
  @Input() name: string;

  constructor(private elementRef: ElementRef) {
  }

  @HostBinding('class')
  className = button['icon'];

  ngOnInit(): void {
    setImage(this.elementRef.nativeElement, this.name);
  }
}


/** Icon Small**/

@Directive({
  selector: '[clIconSmall]'
})
export class ClIconSmallDirective {
  @Input() name: string;
  constructor(private elementRef: ElementRef) {
  }

  @HostBinding('class')
  className = button['iconSmall'];

  ngOnInit(): void {
    setImage(this.elementRef.nativeElement, this.name);
  }
}


/** Icon Big**/

@Directive({
  selector: '[clIconBig]'
})
export class ClIconBigDirective {
  @Input() name: string;
  constructor(private elementRef: ElementRef) {
  }


  @HostBinding('class')
  className = button['iconBig'];

  ngOnInit(): void {
    setImage(this.elementRef.nativeElement, this.name);
  }
}

/** Icon XBig**/

@Directive({
  selector: '[clIconXBig]'
})
export class ClIconXBigDirective {
  @Input() name: string;
  constructor(private elementRef: ElementRef) {
  }

  @HostBinding('class')
  className = button['iconXBig'];

  ngOnInit(): void {
    setImage(this.elementRef.nativeElement, this.name);
  }
}
