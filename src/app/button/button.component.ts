import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cl-button',
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

  public icon = 'cl-edit';

  constructor() { }

  ngOnInit() {

  }

}
