import { Directive, HostBinding } from '@angular/core';

const classClButton = 'cl-button';
const classClButtonSecondary = `${classClButton} ${classClButton}--secondary`;


const classClButtonContained = `${classClButton} ${classClButton}__contained`;
const classClButtonContainedSecondary = `${classClButtonContained} ${classClButton}__contained--secondary`;

const classClButtonOutline = `${classClButton} ${classClButton}__outline`;
const classClButtonOutlineSecondary = `${classClButtonOutline} ${classClButton}__outline--secondary`;

const classClButtonIcon = `${classClButton} ${classClButton}__icon`;
const classClButtonIconSecondary = `${classClButtonIcon} ${classClButton}__icon--secondary`;
const classClButtonIconSmall = `${classClButtonIcon} ${classClButton}__icon--small`;

const classClButtonIconContained = `${classClButtonContained} ${classClButton}__icon__contained`;
const classClButtonIconContainedSecondary =
  `${classClButtonContainedSecondary} ${classClButton}__icon__contained ${classClButton}__icon__contained--secondary`;


  const classClButtonIconOutline = `${classClButtonOutline} ${classClButton}__icon__outline`;
  const classClButtonIconOutlineSecondary =
    `${classClButtonOutlineSecondary} ${classClButton}__icon__outline ${classClButton}__icon__outline--secondary`;



/** Button **/
@Directive({
  selector: '[clButton]'
})
export class ButtonDirective {
  @HostBinding('class')
  className = classClButton;
}

@Directive({
  selector: '[clButtonSecondary]'
})
export class ButtonSecondaryDirective {
  @HostBinding('class')
  className = classClButtonSecondary;
}

/** Contained Button **/
@Directive({
  selector: '[clButtonContained]'
})
export class ButtonContainedDirective {
  @HostBinding('class')
  className = classClButtonContained;
}

@Directive({
  selector: '[clButtonContainedSecondary]'
})
export class ButtonContainedSecondaryDirective {
  @HostBinding('class')
  className = classClButtonContainedSecondary;
}

/** Outline Button **/
@Directive({
  selector: '[clButtonOutline]'
})

export class ButtonOutlineDirective {
  @HostBinding('class')
  className = classClButtonOutline;
}

@Directive({
  selector: '[clButtonOutlineSecondary]'
})
export class ButtonOutlineSecondaryDirective {
  @HostBinding('class')
  className = classClButtonOutlineSecondary;
}

/** Button Icon**/
@Directive({
  selector: '[clButtonIcon]'
})
export class ButtonIconDirective {
  @HostBinding('class')
  className = classClButtonIcon;
}

@Directive({
  selector: '[clButtonIconSmall]'
})
export class ButtonIconSmallDirective {
  @HostBinding('class')
  className = classClButtonIconSmall;
}

@Directive({
  selector: '[clButtonIconSecondary]'
})
export class ButtonIconSecondaryDirective {
  @HostBinding('class')
  className = classClButtonIconSecondary;
}


/** Button Icon Contained **/
@Directive({
  selector: '[clButtonIconContained]'
})
export class ButtonIconContainedDirective {
  @HostBinding('class')
  className = classClButtonIconContained;
}

@Directive({
  selector: '[clButtonIconContainedSecondary]'
})
export class ButtonIconContainedSecondaryDirective {
  @HostBinding('class')
  className = classClButtonIconContainedSecondary;
}


/** Button Icon Outline **/
@Directive({
  selector: '[clButtonIconOutline]'
})
export class ButtonIconOutlineDirective {
  @HostBinding('class')
  className = classClButtonIconOutline;
}

@Directive({
  selector: '[clButtonIconOutlineSecondary]'
})
export class ButtonIconOutlineSecondaryDirective {
  @HostBinding('class')
  className = classClButtonIconOutlineSecondary;
}
