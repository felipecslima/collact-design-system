import { Directive, HostBinding } from '@angular/core';

const button = {
  'button': 'cl-button',
  'dense': 'cl-button cl-button--dense',
  'secondary': 'cl-button cl-button--secondary',
  'contained': 'cl-button cl-button__contained',
  'containedSecondary': 'cl-button cl-button__contained cl-button__contained--secondary',
  'outline': 'cl-button cl-button__outline',
  'outlineSecondary': 'cl-button cl-button__outline cl-button__outline--secondary',
  'icon': 'cl-button cl-button__icon',
  'iconSecondary': 'cl-button cl-button__icon cl-button__icon--secondary',
  'iconSmall': 'cl-button cl-button__icon cl-button__icon__small',
  'iconSmallSecondary': 'cl-button cl-button__icon cl-button__icon__small--secondary',

  'iconContained': 'cl-button cl-button__contained cl-button__icon cl-button__icon__contained',
  'iconContainedSecondary': 'cl-button cl-button__contained cl-button__contained--secondary cl-button__icon cl-button__icon__contained cl-button__icon__contained--secondary',
  'iconOutline': 'cl-button cl-button__outline cl-button__icon cl-button__icon__outline',
  'iconOutlineSecondary': 'cl-button cl-button__outline cl-button__outline--secondary cl-button__icon cl-button__icon__outline cl-button__icon__outline--secondary',
};

/** Button Dense **/
@Directive({
  selector: '[clButtonDense]'
})
export class ButtonDenseDirective {
  @HostBinding('style.height')
  className = '40px';
}

/** Button **/
@Directive({
  selector: '[clButton]'
})
export class ButtonDirective {
  @HostBinding('class')
  className = button['button'];
}

@Directive({
  selector: '[clButtonSecondary]'
})
export class ButtonSecondaryDirective {
  @HostBinding('class')
  className = button['secondary'];
}

/** Contained Button **/
@Directive({
  selector: '[clButtonContained]'
})
export class ButtonContainedDirective {
  @HostBinding('class')
  className = button['contained'];
}

@Directive({
  selector: '[clButtonContainedSecondary]'
})
export class ButtonContainedSecondaryDirective {
  @HostBinding('class')
  className = button['containedSecondary'];
}

/** Outline Button **/
@Directive({
  selector: '[clButtonOutline]'
})

export class ButtonOutlineDirective {
  @HostBinding('class')
  className = button['outline'];
}

@Directive({
  selector: '[clButtonOutlineSecondary]'
})
export class ButtonOutlineSecondaryDirective {
  @HostBinding('class')
  className = button['outlineSecondary'];
}

/** Button Icon**/
@Directive({
  selector: '[clButtonIcon]'
})
export class ButtonIconDirective {
  @HostBinding('class')
  className = button['icon'];
}

@Directive({
  selector: '[clButtonIconSmall]'
})
export class ButtonIconSmallDirective {
  @HostBinding('class')
  className = button['iconSmall'];
}

@Directive({
  selector: '[clButtonIconSmallSecondary]'
})
export class ButtonIconSmallSecondaryDirective {
  @HostBinding('class')
  className = button['iconSmallSecondary'];
}

@Directive({
  selector: '[clButtonIconSecondary]'
})
export class ButtonIconSecondaryDirective {
  @HostBinding('class')
  className = button['iconSecondary'];
}


/** Button Icon Contained **/
@Directive({
  selector: '[clButtonIconContained]'
})
export class ButtonIconContainedDirective {
  @HostBinding('class')
  className = button['iconContained'];
}

@Directive({
  selector: '[clButtonIconContainedSecondary]'
})
export class ButtonIconContainedSecondaryDirective {
  @HostBinding('class')
  className = button['iconContainedSecondary'];
}


/** Button Icon Outline **/
@Directive({
  selector: '[clButtonIconOutline]'
})
export class ButtonIconOutlineDirective {
  @HostBinding('class')
  className = button['iconOutline'];
}

@Directive({
  selector: '[clButtonIconOutlineSecondary]'
})
export class ButtonIconOutlineSecondaryDirective {
  @HostBinding('class')
  className = button['iconOutlineSecondary'];
}
